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
  }
};

module.exports = orderController;
