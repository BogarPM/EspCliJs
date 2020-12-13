const express = require('express');
var router = express.Router();

router.use(express.static('../public'));

router.get('/', (req,res)=>{
    res.sendFile('../public/')
});

module.exports = router;