const express = require("express");
const app = express();

let port = 3000;

app.get('/',(req,res) => {
    console.log('Get request');
    res.send('Hello World');
});

app.listen(port,()=>{
    console.log('Server listenning on port ', port);
});