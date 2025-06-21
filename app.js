const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')


const rootDir = require('./utilities/path')

const app = express();

// app.engine('handlebars', expressHbs.engine());
// app.set('view engine', 'handlebars');
app.set('view engine', 'ejs'); // To tell express what template engine we are using
app.set('views', 'views'); // To tell express where to use the template engine

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public'))) //statically serves the css files

// filtering routes

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
})



app.listen(3000)