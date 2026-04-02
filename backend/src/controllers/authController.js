const { sql, config } = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key_here';

const authController = {
  // --- ĐĂNG KÝ TÀI KHOẢN ---
  register: async (req, res) => {
    try {
      const { email, phone, password, fullName, role } = req.body;
      
      if (!email || !phone || !password || !fullName || !role) {
        return res.status(400).json({ message: 'Vui lòng điền đủ: email, phone, password, fullName, role' });
      }

      // 1. Kết nối DB
      const pool = await sql.connect(config);

      // 2. Kiểm tra Email hoặc SĐT đã tồn tại chưa
      const checkUser = await pool.request()
        .input('Email', sql.VarChar, email)
        .input('Phone', sql.VarChar, phone)
        .query('SELECT * FROM Users WHERE Email = @Email OR Phone = @Phone');

      if (checkUser.recordset.length > 0) {
        return res.status(400).json({ message: 'Email hoặc Số điện thoại đã được sử dụng!' });
      }

      // 3. Mã hóa mật khẩu
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // 4. Chuẩn hóa Role và Chèn vào CSDL
      const dbRole = role.toUpperCase() === 'USER' ? 'CUSTOMER' : role.toUpperCase();

      const result = await pool.request()
        .input('Phone', sql.VarChar, phone)
        .input('PasswordHash', sql.NVarChar, hashedPassword)
        .input('FullName', sql.NVarChar, fullName)
        .input('Email', sql.VarChar, email)
        .input('Role', sql.VarChar, dbRole)
        .query(`
          INSERT INTO Users (Phone, PasswordHash, FullName, Email, Role, Status, CreatedAt)
          OUTPUT INSERTED.UserID, INSERTED.FullName, INSERTED.Email, INSERTED.Role
          VALUES (@Phone, @PasswordHash, @FullName, @Email, @Role, 'ACTIVE', GETDATE())
        `);

      const newUser = result.recordset[0];

      res.status(201).json({ 
        message: 'Tạo tài khoản lưu vào Database thành công!', 
        user: newUser 
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Đã xảy ra lỗi Server', error: error.message });
    }
  },

  // --- ĐĂNG NHẬP ---
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(`Attempting login for: ${email}`);

      if (!email || !password) {
        console.log('Login failed: Missing email or password');
        return res.status(400).json({ message: 'Vui lòng nhập email và mật khẩu' });
      }

      const pool = await sql.connect(config);
      
      // 1. Tìm User
      const userResult = await pool.request()
        .input('Email', sql.VarChar, email)
        .query('SELECT * FROM Users WHERE Email = @Email');

      if (userResult.recordset.length === 0) {
        console.log(`Login failed: User not found [${email}]`);
        return res.status(400).json({ message: 'Tài khoản không tồn tại' });
      }

      const user = userResult.recordset[0];

      // 2. Kiểm tra Pass
      console.log(`DEBUG: Input password length: ${password.trim().length}`);
      const isMatch = await bcrypt.compare(password.trim(), user.PasswordHash.trim());
      if (!isMatch) {
         console.log(`Login failed: Wrong password for [${email}]`);
         console.log(`Expected Hash: [${user.PasswordHash.trim()}]`);
         return res.status(400).json({ message: 'Sai mật khẩu' });
      }

      console.log(`Login successful for: ${email} (${user.Role})`);

      // 3. Ký phát JWT
      const token = jwt.sign(
        { id: user.UserID, role: user.Role },
        SECRET_KEY,
        { expiresIn: '1d' }
      );

      res.json({
        message: 'Đăng nhập thành công',
        token,
        user: {
           id: user.UserID,
           name: user.FullName,
           email: user.Email,
           role: user.Role,
           avatar: user.AvatarURL
        }
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Lỗi Server', error: error.message });
    }
  }
};

module.exports = authController;
