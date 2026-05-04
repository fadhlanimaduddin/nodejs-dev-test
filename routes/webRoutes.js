const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const StringMatchController = require('../controllers/StringMatchController');
const ProductController = require('../controllers/ProductController');

// Routes Auth
router.get('/login', AuthController.renderLogin);
router.post('/login', AuthController.handleLogin);
router.get('/logout', AuthController.handleLogout);

// Routes Dashboard & String Match
router.get('/', AuthController.checkAuth, StringMatchController.renderDashboard);
router.post('/string-match', AuthController.checkAuth, StringMatchController.calculateMatch);

// Routes CRUD Produk
router.get('/products', AuthController.checkAuth, ProductController.renderProductPage);
router.post('/products/add', AuthController.checkAuth, ProductController.addProduct);

router.get('/products/edit/:id', AuthController.checkAuth, ProductController.renderEditPage);
router.post('/products/update/:id', AuthController.checkAuth, ProductController.updateProduct);

router.get('/products/delete/:id', AuthController.checkAuth, ProductController.deleteProduct);

router.post('/products/bundle', AuthController.checkAuth, ProductController.processBundleDiscounts);

module.exports = router;