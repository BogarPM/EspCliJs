const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
var db = require('./src/statusManager');

var soc = require('./src/Tcpsoc');

var analog_route = require('./routes/analog_route');
var data_route = require('./routes/data_route.js');
var devices_route = require('./routes/devices_route.js');
var leds_route = require('./routes/leds_route.js');
var buttons_route = require('./routes/buttons_route.js');

let tobj ={
        "p1": {
            "pin": 13,
            "type": 1,
        },
        "p2": {
            "pin": 12,
            "type": 1,
        }
    }
console.log(JSON.stringify(tobj));

/*Object.keys(tobj).forEach(function(k){
    console.log(k + ' - ' + tobj[k]);
    Object.keys(tobj[k]).forEach(function(n){
        console.log('  ' + n + ' - ' + tobj[k][n]);
    });
});*/


//db.registerDevice("asd", "127.0.0.1");
//db.statusChange(1,13,0);

app.use(express.static('public'));
app.use(express.json());
app.use('/analog', analog_route);
app.use('/data', data_route);
app.use('/leds', leds_route);
app.use('/buttons', buttons_route);
app.use('/devices', devices_route);

let port = 3000;

app.get('/',(req,res) => {
    console.log('Get request');
    res.sendFile(__dirname + '/public/main.html');
});


/*io.on('connection', function(socket){
    //console.log('Cliente conectado');
    //soc.emit('text',message);
});*/

server.listen(port,()=>{
    console.log('Server listenning on port ', port);
});

