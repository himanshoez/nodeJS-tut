const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next)=>{

    res.send('<form action ="/product" method = "POST"><input type= "text" name = "Product" placeholder = "Enter the product"><button>Add Product</button></form>');    
})

//  middleware will only listen to POST requests 
app.post('/product', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res, next)=>{
    res.send('<h1>Hello From Express</h1>');
})

app.listen(3000)