import Product from '../models/product.model.js';

class ProductsController {

    getProducts(req, res, next) {
        var products = Product.getAll();
        res.render('index', { products });
    }

    getAddProduct(req, res, next) {
        res.render('new-product');
    }

    postAddProduct(req, res, next) {
        console.log(req.body)
        res.redirect('/');
    }
}

export default ProductsController
