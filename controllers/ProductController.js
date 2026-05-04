const Product = require('../models/ProductModel');

class ProductController {
    
    static renderProductPage(req, res) {
        const products = Product.readAll();
        res.render('products', { products: products, bundles: undefined });
    }

    static addProduct(req, res) {
        const { name, category, price } = req.body;
        Product.create({ name, category, price: parseFloat(price) });
        res.redirect('/products');
    }

    static renderEditPage(req, res) {
        const id = parseInt(req.params.id);
        const product = Product.readById(id);
        if (!product) return res.redirect('/products');
        
        res.render('edit-product', { product });
    }

    static updateProduct(req, res) {
        const id = parseInt(req.params.id);
        const { name, category, price } = req.body;
        Product.update(id, { name, category, price: parseFloat(price) });
        res.redirect('/products');
    }

    static deleteProduct(req, res) {
        const id = parseInt(req.params.id);
        Product.delete(id);
        res.redirect('/products');
    }

    static processBundleDiscounts(req, res) {
        let { selectedProducts } = req.body;
        
        if (!selectedProducts) selectedProducts = [];
        if (!Array.isArray(selectedProducts)) selectedProducts = [selectedProducts];

        const products = Product.readAll();
        const bundles = Product.calculateBundleDiscounts(selectedProducts, 10000); 
        
        res.render('products', { products: products, bundles: bundles });
    }
}

module.exports = ProductController;