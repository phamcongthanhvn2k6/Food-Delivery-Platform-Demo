const sql = require('mssql/msnodesqlv8');
require('dotenv').config();

const config = {
    server: process.env.DB_SERVER || 'localhost', 
    database: process.env.DB_NAME || 'DuAnDemoDB',
    driver: 'msnodesqlv8', // Bắt buộc khi dùng msnodesqlv8
    options: {
        trustedConnection: true, // Sử dụng Windows Authentication (không cần username/password)
        trustServerCertificate: true // Quan trọng để dùng ở localhost không bị lỗi chứng chỉ
    }
};

const connectDB = async () => {
    try {
        await sql.connect(config);
        console.log('✅ Kết nối SQL Server thành công!');
    } catch (err) {
        console.error('❌ Kết nối SQL Server thất bại:', err.message);
    }
};

module.exports = { sql, connectDB };
