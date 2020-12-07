const express = require("express");
const db = require('./src/statusManager')
var analog_route = require('./routes/analog_route');
var data_route = require('./routes/data_route.js');
const app = express();


app.use(express.static('public'));
app.use('/analog', analog_route);
app.use('/data', data_route)

let port = 3000;

app.get('/',(req,res) => {
    console.log('Get request');
    res.sendFile(__dirname + '/public/panel.html');
});

app.listen(port,()=>{
    console.log('Server listenning on port ', port);
});

