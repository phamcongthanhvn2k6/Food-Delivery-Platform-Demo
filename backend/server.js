const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { connectDB } = require('./src/config/db');

// Khởi tạo App & Quy chuẩn MVC mới
const app = express();
app.use(cors());
app.use(express.json()); // Body-parser có sẵn trong Express 5.x

// Import Routes theo kiểu Enterprise (Ngang hàng Frontend)
const authRoutes = require('./src/routes/authRoutes');
const publicRoutes = require('./src/routes/publicRoutes');
const orderRoutes = require('./src/routes/orderRoutes');

// Khởi chạy Server
const startServer = async () => {
    try {
        await connectDB();
        
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`🚀 Backend xịn xò (Enterprise Structure) đang chạy tại http://localhost:${PORT}`);
            console.log(`🔗 API Login URL: http://localhost:${PORT}/api/auth/login`);
        });
    } catch (err) {
        console.error('❌ Không thể khởi động Server do lỗi SQL:', err.message);
        process.exit(1);
    }
};

startServer();

// ----------------------------------------------------
// ĐĂNG KÝ VẬN HÀNH ROUTES CHÍNH
// ----------------------------------------------------
app.use('/api/auth', authRoutes);
app.use('/api/public', publicRoutes);
app.use('/api/orders', orderRoutes);

// Route Test Hệ Thống
app.get('/', (req, res) => {
    res.json({ message: "Welcome to Culinary Flow - Real API Server Connected to SQL" });
});

// Chạy Node
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Backend xịn xò (Enterprise Structure) đang chạy tại http://localhost:${PORT}`);
    console.log(`🔗 API Login URL: http://localhost:${PORT}/api/auth/login`);
});
