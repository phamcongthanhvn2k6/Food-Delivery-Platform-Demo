const express = require('express');
const router = express.Router();
const publicController = require('../controllers/publicController');

router.get('/categories', publicController.getCategories);
router.get('/products', publicController.getProductsByCategory);
router.get('/products/:id', publicController.getItemById);
router.get('/featured-items', publicController.getFeaturedItems);

module.exports = router;
