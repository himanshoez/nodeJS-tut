const express = require('express');

const router = express.Router();

router.use('/add-product', (req, res, next)=>{

    res.send('<form action ="/product" method = "POST"><input type= "text" name = "Product" placeholder = "Enter the product"><button>Add Product</button></form>');    
})

//  middleware will only listen to POST requests 
router.post('/product', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;