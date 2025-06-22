const express = require('express');

const app = express();

app.use('/users', (req, res, next)=>{
    res.send('<ul><li>palak</li><li>himanshoe</li><li>satya</li>');
})

app.use('/',(req, res, next)=>{
    res.send('<h1>Hellowwww</h1>');
})

app.listen(3000);