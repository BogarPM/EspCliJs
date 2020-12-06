const express = require('express');
var router = express.Router();

router.get('/',(req, res)=>{
    console.log('Entering into analog route!');
});

module.exports = router;