const express = require("express");
const app = express();

app.use(express.static('public'));

let port = 3000;

app.get('/',(req,res) => {
    console.log('Get request');
    res.sendFile(__dirname + '/public/panel.html');
});

app.listen(port,()=>{
    console.log('Server listenning on port ', port);
});
