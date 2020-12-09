const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
var db = require('./src/statusManager');

var analog_route = require('./routes/analog_route');
var data_route = require('./routes/data_route.js');




app.use(express.static('public'));
app.use('/analog', analog_route);
app.use('/data', data_route);

let port = 3000;

app.get('/',(req,res) => {
    console.log('Get request');
    res.sendFile(__dirname + '/public/panel.html');
});

io.on('connection', function(socket){
    console.log('Cliente conectado');
    //soc.emit('text',message);
});

server.listen(port,()=>{
    console.log('Server listenning on port ', port);
});

