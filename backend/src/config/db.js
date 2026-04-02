const sql = require('mssql/msnodesqlv8');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') }); 

const serverName = process.env.DB_SERVER || 'DESKTOP-AUQETG8';
const dbName = process.env.DB_NAME || 'Food_Delivery_System';
const dbUser = process.env.DB_USER || 'test';
const dbPass = process.env.DB_PASSWORD || 'thanhtyou123@';

const config = {
    connectionString: `Driver={ODBC Driver 18 for SQL Server};Server=${serverName};Database=${dbName};Uid=${dbUser};Pwd=${dbPass};Encrypt=no;TrustServerCertificate=yes;`
};

let pool;

const connectDB = async () => {
    try {
        if (!pool) {
            pool = await sql.connect(config);
            console.log(`✅ Kết nối SQL Server thành công tới [${dbName}]!`);
        }
        return pool;
    } catch (err) {
        console.error('❌ Kết nối SQL Server thất bại:', err.message);
        throw err;
    }
};

module.exports = { sql, connectDB, config };
