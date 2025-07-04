const express = require('express');
const path = require('path');


const rootDir = require('../utilities/path');

const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res, next)=>{
    const products = adminData.products;
    res.render('shop',
         {prods: products,
          pageTitle: 'Shop',
          path: '/',
          hasProducts: products.length > 0,
          activeShop : true,
          productCSS: true
        });
    // console.log('shop JS', adminData.products);
    // res.sendFile(path.join(rootDir ,'views', 'shop.html'))
})  

module.exports = router;