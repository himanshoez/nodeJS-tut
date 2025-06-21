const express = require('express');
const path = require('path');

const rootDir = require('../utilities/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next)=>{

    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {
        pageTitle: "Add Product",
        path : '/admin/add-product',
        formsCSS: true,
        productCSS:  true,
        activeAddProduct: true
    })    
})

//  middleware will only listen to POST requests 
router.post('/add-product', (req, res, next)=>{
    products.push({title: req.body.title});
    console.log(req.body);
    res.redirect('/');
})

exports.routes = router;
exports.products =  products;