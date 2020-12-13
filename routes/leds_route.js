const express = require('express');
var soc = require('../src/Tcpsoc');

var router = express.Router();

router.get('/', function(req, res){
    soc.getConnections(function(err,nmb){
        if(err){throw err;}
        console.log(nmb);
        let item = {"d1":"asd"};
        console.log(soc.clients[0].write(JSON.stringify(item)));

    });
});

module.exports = router;