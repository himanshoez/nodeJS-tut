const express = require('express')

const router = express.Router();

const userNames = [];

router.get('/add-user', (req, res, next)=>{
    res.render('add-user', {
        pageTitle: "Add User",
    })
})

router.post('/add-user', (req, res, next)=>{
    userNames.push({Username: req.body.Username});
    console.log(req.body);
    res.redirect('/');
})


exports.routes = router;
exports.users = userNames;