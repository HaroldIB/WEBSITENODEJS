const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    //res.sendFile(path.join(__dirname,'views/index.html'));
    res.render('index.html',{ title: 'first website'});
});

router.get('/contac', (req,res)=>{
    //res.sendFile(path.join(__dirname,'views/index.html'));
    res.render('contac.html',{ title: 'contact page'});
});

module.exports = router;