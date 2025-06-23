const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminData = require('./admin');


app.set('view engine', 'ejs');
// app.set('views', '03Assignment')

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminData.routes)



app.use((req, res, next)=>{
    // res.send('<h1> Hello From Server</h1>');
    const userName = adminData.users;
    res.render('home',{
        users : userName,
        pageTitle : 'Users',
        path: '/'
    })
});

app.listen(3000);