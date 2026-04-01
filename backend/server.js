const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const DB_PATH = path.join(__dirname, '../db.json');
const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key_here';

// Cấu hình Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'food-delivery', // Tên folder trên cloudinary 
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp']
  }
});

const upload = multer({ storage: storage });

// Read DB helper
const readDB = () => {
    try {
        const data = fs.readFileSync(DB_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        return { users: [] };
    }
};

// Write DB helper
const writeDB = (data) => {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
};

app.post('/api/auth/register', async (req, res) => {
    try {
        const { email, password, fullName, role } = req.body;
        
        if (!email || !password || !fullName || !role) {
            return res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin' });
        }

        const db = readDB();
        
        // Kiểm tra email tồn tại
        const userExists = db.users.find(u => u.email === email);
        if (userExists) {
            return res.status(400).json({ message: 'Email đã được sử dụng' });
        }

        // Mã hóa mật khẩu
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = {
            id: Date.now().toString(),
            email,
            password: hashedPassword,
            fullName,
            role,      // 'user', 'admin', 'shipper', 'restaurant_owner'
            createdAt: new Date().toISOString()
        };

        db.users.push(newUser);
        writeDB(db);

        // Không trả về password
        const { password: pw, ...userWithoutPassword } = newUser;
        res.status(201).json({ message: 'Đăng ký thành công', user: userWithoutPassword });

    } catch (error) {
        res.status(500).json({ message: 'Đã xảy ra lỗi server', error: error.message });
    }
});

app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ message: 'Vui lòng nhập email và mật khẩu' });
        }

        const db = readDB();
        
        // Tìm user
        const user = db.users.find(u => u.email === email);
        if (!user) {
            return res.status(400).json({ message: 'Sai email hoặc mật khẩu' });
        }

        // Kiểm tra mật khẩu
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Sai email hoặc mật khẩu' });
        }

        // Tạo JWT Token
        const token = jwt.sign(
            { id: user.id, role: user.role },
            SECRET_KEY,
            { expiresIn: '1d' }
        );

        const { password: pw, ...userWithoutPassword } = user;
        res.json({
            message: 'Đăng nhập thành công',
            token,
            user: userWithoutPassword
        });

    } catch (error) {
        res.status(500).json({ message: 'Đã xảy ra lỗi server', error: error.message });
    }
});

app.post('/api/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'Không thể tải ảnh lên hoặc chưa chọn ảnh' });
    }
    
    res.json({
        message: 'Tải ảnh lên thành công',
        imageUrl: req.file.path // URL ảnh trả về từ Cloudinary
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});
