const express = require('express');
var db = require('../src/statusManager');
var router = express.Router();
var path = require('path');

router.use(express.static(__dirname + '/../public/'));

router.get('/', (req,res)=>{
    console.log(__dirname + '/../public/devices.html');
    res.sendFile(path.join(__dirname,'../public','devices.html'));
    
});

router.get('/list', (req,res)=>{
    db.query('select * from devices',function(r,e,f){
        if(e){throw e;}
        console.log(r);
        res.json(r);
        res.send('asdasd');
    });
})

router.post('/devices',(req,res)=>{
    console.log(req.body);
    db.registerDev(req.body);
    res.json("thanks");
});

module.exports = router;