const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

// Route lấy danh sách đơn hàng của tôi (Yêu cầu đăng nhập)
router.get('/my-orders', authMiddleware, orderController.getMyOrders);

// Route lấy chi tiết đơn hàng (Yêu cầu đăng nhập)
router.get('/:id', authMiddleware, orderController.getOrderDetails);

module.exports = router;
