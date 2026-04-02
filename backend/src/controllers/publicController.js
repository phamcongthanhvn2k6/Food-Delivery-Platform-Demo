const { sql, config } = require('../config/db');

const publicController = {
  // Lấy Categories (Từ bảng MenuCategories mới)
  getCategories: async (req, res) => {
    try {
      const pool = await sql.connect(config);
      // Lấy danh sách các danh mục thực đơn duy nhất dựa theo tên
      const result = await pool.request()
        .query('SELECT DISTINCT Name as name FROM MenuCategories');
      
      const categories = result.recordset.map((row, index) => ({
        id: (index + 1).toString(),
        name: row.name,
        type: row.name.toLowerCase().includes('uống') ? 'drink' : 'food'
      }));

      res.json(categories);
    } catch (error) {
      console.error('Lỗi khi lấy danh mục:', error);
      res.status(500).json({ message: 'Lỗi Server khi lấy danh mục' });
    }
  },

  // Lấy các sản phẩm hot trang chủ
  getFeaturedItems: async (req, res) => {
    try {
      const pool = await sql.connect(config);
      // Lấy Món ăn kèm với thông tin nhà hàng hiển thị rating
      const result = await pool.request()
        .query(`
          SELECT TOP(6) 
            m.ItemID as id, 
            m.ItemName as name, 
            m.Description as description, 
            m.Price as price, 
            m.ImageURL as imageUrl, 
            r.Category as category, 
            ISNULL(r.Rating, 5) as rating
          FROM MenuItems m
          JOIN Restaurants r ON m.RestaurantID = r.RestaurantID
          WHERE m.IsAvailable = 1
          ORDER BY r.Rating DESC, m.Price ASC
        `);

      res.json(result.recordset);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Lỗi Server' });
    }
  },

  // Lấy các sản phẩm theo danh mục (Sửa lỗi cho CategoryPage)
  getProductsByCategory: async (req, res) => {
    try {
      const { category } = req.query;
      const pool = await sql.connect(config);

      let query = `
        SELECT 
          m.ItemID as id, 
          m.ItemName as name, 
          m.Description as description, 
          m.Price as price, 
          m.ImageURL as imageUrl, 
          c.Name as category, 
          ISNULL(r.Rating, 5) as rating
        FROM MenuItems m
        LEFT JOIN Restaurants r ON m.RestaurantID = r.RestaurantID
        LEFT JOIN MenuCategories c ON m.CategoryID = c.CategoryID
        WHERE m.IsAvailable = 1
      `;

      const request = pool.request();
      if (category) {
        query += ' AND c.Name = @Category';
        request.input('Category', sql.NVarChar, category);
      }

      const result = await request.query(query);
      console.log(`DEBUG: Found ${result.recordset.length} products for category [${category || 'ALL'}]`);
      res.json(result.recordset);

    } catch (error) {
      console.error('Lỗi khi lấy sản phẩm theo danh mục:', error);
      res.status(500).json({ message: 'Lỗi Server' });
    }
  },

  // Lấy chi tiết một món ăn
  getItemById: async (req, res) => {
    try {
      const { id } = req.params;
      console.log(`DEBUG: Fetching item details for ID: ${id}`);
      const pool = await sql.connect(config);

      // KIỂM TRA THỬ DANH SÁCH ID ĐANG CÓ (Chỉ để debug)
      const allIds = await pool.request().query('SELECT TOP 10 ItemID FROM MenuItems');
      console.log('DEBUG: Danh sách 10 ID đầu tiên trong MenuItems:', allIds.recordset.map(r => r.ItemID));
      
      const result = await pool.request()
        .input('ItemID', sql.Int, id)
        .query(`
          SELECT 
            m.ItemID as id, 
            m.ItemName as name, 
            m.Description as description, 
            m.Price as price, 
            m.ImageURL as imageUrl, 
            c.Name as category, 
            ISNULL(r.Rating, 5) as rating,
            ISNULL(r.BrandName, N'Nhà hàng chưa xác định') as restaurantName
          FROM MenuItems m
          LEFT JOIN Restaurants r ON m.RestaurantID = r.RestaurantID
          LEFT JOIN MenuCategories c ON m.CategoryID = c.CategoryID
          WHERE m.ItemID = @ItemID
        `);
        
      if (result.recordset.length === 0) {
        console.log(`DEBUG: Item not found for ID: ${id}`);
        return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
      }
      
      console.log(`DEBUG: Successfully fetched item: ${result.recordset[0].name}`);
      res.json(result.recordset[0]);
      
    } catch (error) {
      console.error('Lỗi khi lấy chi tiết món ăn:', error);
      res.status(500).json({ message: 'Lỗi Server khi truy vấn món ăn' });
    }
  }
};

module.exports = publicController;
