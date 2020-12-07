const express = require('express');
var router = express.Router();

router.get('/:id/:id2/:id3',(req, res)=>{
    console.log(req.params);
})

router.post('/:data1/:data2/:data3', (req, res)=>{

})

module.exports = router;


function submit(d1 = 0, d2 = 0, d3 = 0){
    
}