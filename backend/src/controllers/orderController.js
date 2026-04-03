const { sql, config } = require('../config/db');

const orderController = {
  // --- LẤY CHI TIẾT ĐƠN HÀNG ---
  getOrderDetails: async (req, res) => {
    try {
      const { id } = req.params; // OrderID (GUID)

      if (!id) {
        return res.status(400).json({ message: 'Thiếu mã đơn hàng (OrderID)' });
      }

      const pool = await sql.connect(config);

      // 1. Lấy thông tin chung của đơn hàng, nhà hàng và thanh toán
      const orderResult = await pool.request()
        .input('OrderID', sql.UniqueIdentifier, id)
        .query(`
          SELECT 
            o.OrderID, o.Status, o.AddressFrom, o.AddressTo, o.CustomerNote,
            o.SubTotal, o.DeliveryFee, o.DiscountAmount, o.TotalAmount, o.OrderTime,
            r.BrandName AS RestaurantName, r.Address AS RestaurantAddress,
            p.Method AS PaymentMethod, p.Status AS PaymentStatus
          FROM Orders o
          LEFT JOIN Restaurants r ON o.RestaurantID = r.RestaurantID
          LEFT JOIN Payments p ON o.OrderID = p.OrderID
          WHERE o.OrderID = @OrderID
        `);

      if (orderResult.recordset.length === 0) {
        return res.status(404).json({ message: 'Không tìm thấy đơn hàng' });
      }

      const order = orderResult.recordset[0];

      // 2. Lấy danh sách món ăn trong đơn hàng
      const itemsResult = await pool.request()
        .input('OrderID', sql.UniqueIdentifier, id)
        .query(`
          SELECT 
            mi.ItemName, od.Quantity, od.UnitPrice, od.Options, mi.ImageURL
          FROM OrderDetails od
          JOIN MenuItems mi ON od.ItemID = mi.ItemID
          WHERE od.OrderID = @OrderID
        `);

      res.json({
        message: 'Lấy chi tiết đơn hàng thành công',
        order: {
          ...order,
          items: itemsResult.recordset
        }
      });

    } catch (error) {
      console.error('Lỗi khi lấy chi tiết đơn hàng:', error);
      res.status(500).json({ message: 'Lỗi Server khi truy vấn đơn hàng', error: error.message });
    }
  },
  
  // --- LẤY DANH SÁCH ĐƠN HÀNG CỦA TÔI ---
  getMyOrders: async (req, res) => {
    try {
      const { id: userID } = req.user; // Từ Token decoded
      
      const pool = await sql.connect(config);
      
      const result = await pool.request()
        .input('UserID', sql.Int, userID)
        .query(`
          SELECT 
            o.OrderID, o.Status, o.TotalAmount, o.OrderTime,
            r.BrandName AS RestaurantName, r.ImageURL AS RestaurantImage
          FROM Orders o
          JOIN Restaurants r ON o.RestaurantID = r.RestaurantID
          WHERE o.CustomerID = @UserID
          ORDER BY o.OrderTime DESC
        `);
        
      res.json({
        message: 'Lấy danh sách đơn hàng thành công',
        orders: result.recordset
      });
      
    } catch (error) {
      console.error('Lỗi khi lấy danh sách đơn hàng:', error);
      res.status(500).json({ message: 'Lỗi Server khi truy vấn đơn hàng', error: error.message });
    }
  },

  // --- TẠO ĐƠN HÀNG MỚI (Dùng Transaction) ---
  createOrder: async (req, res) => {
    const transaction = new sql.Transaction();
    try {
      const { 
        items, 
        addressTo, 
        customerNote, 
        subTotal, 
        deliveryFee, 
        totalAmount,
        paymentMethod 
      } = req.body;
      const { id: userID } = req.user;

      // Giả sử lấy RestaurantID từ món đầu tiên
      // Trong thực tế, hệ thống nên check xem tất cả các món có cùng nhà hàng không
      const restaurantID = items[0]?.restaurantId || 1; 

      await transaction.begin();
      const pool = await sql.connect(config);

      // 1. Tạo đơn hàng mới (Trạng thái mặc định: 'Pending')
      const orderRequest = new sql.Request(transaction);
      const orderID = require('crypto').randomUUID(); // Tạo GUID cho OrderID

      await orderRequest
        .input('OrderID', sql.UniqueIdentifier, orderID)
        .input('CustomerID', sql.Int, userID)
        .input('RestaurantID', sql.Int, restaurantID)
        .input('Status', sql.NVarChar, 'Pending')
        .input('AddressTo', sql.NVarChar, addressTo)
        .input('CustomerNote', sql.NVarChar, customerNote || '')
        .input('SubTotal', sql.Decimal(18, 2), subTotal)
        .input('DeliveryFee', sql.Decimal(18, 2), deliveryFee)
        .input('TotalAmount', sql.Decimal(18, 2), totalAmount)
        .query(`
          INSERT INTO Orders (OrderID, CustomerID, RestaurantID, Status, AddressTo, CustomerNote, SubTotal, DeliveryFee, TotalAmount, OrderTime)
          VALUES (@OrderID, @CustomerID, @RestaurantID, @Status, @AddressTo, @CustomerNote, @SubTotal, @DeliveryFee, @TotalAmount, GETDATE())
        `);

      // 2. Chèn danh sách món ăn vào OrderDetails
      for (const item of items) {
        const detailRequest = new sql.Request(transaction);
        await detailRequest
          .input('OrderID', sql.UniqueIdentifier, orderID)
          .input('ItemID', sql.Int, item.id)
          .input('Quantity', sql.Int, item.quantity)
          .input('UnitPrice', sql.Decimal(18, 2), item.price)
          .input('Options', sql.NVarChar, JSON.stringify(item.options))
          .query(`
            INSERT INTO OrderDetails (OrderID, ItemID, Quantity, UnitPrice, Options)
            VALUES (@OrderID, @ItemID, @Quantity, @UnitPrice, @Options)
          `);
      }

      // 3. Tạo bản ghi thanh toán
      const paymentRequest = new sql.Request(transaction);
      await paymentRequest
        .input('OrderID', sql.UniqueIdentifier, orderID)
        .input('Method', sql.NVarChar, paymentMethod)
        .input('Status', sql.NVarChar, paymentMethod === 'Tiền mặt' ? 'Unpaid' : 'Paid')
        .query(`
          INSERT INTO Payments (OrderID, Method, Status)
          VALUES (@OrderID, @Method, @Status)
        `);

      await transaction.commit();

      res.status(201).json({
        message: 'Đặt hàng thành công!',
        orderId: orderID
      });

    } catch (error) {
      console.error('Lỗi khi tạo đơn hàng:', error);
      if (transaction) await transaction.rollback();
      res.status(500).json({ message: 'Lỗi khi đặt hàng', error: error.message });
    }
  }
};

module.exports = orderController;
