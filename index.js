const express = require("express");
var analog_route = require('./routes/analog_route');
const app = express();

app.use(express.static('public'));
app.use('/analog', analog_route);

let port = 3000;

app.get('/',(req,res) => {
    console.log('Get request');
    res.sendFile(__dirname + '/public/panel.html');
});

app.listen(port,()=>{
    console.log('Server listenning on port ', port);
});

