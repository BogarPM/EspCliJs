const db = require('./statusManager');
var net = require('net');
var JsonSocket = require('json-socket');
const con = require('./statusManager');

let port = 8000;
let server = net.createServer();
let currentConnections = 0;
server.clients = [];

server.listen(port);
server.on('connection', function(socket) { //This is a standard net.Socket
    console.log('Client connected');
    //console.log(socket.address());
    let cname = 'c';
    server.getConnections(function(e,n){
        cname += n;
    });
    //console.log('information about connecting socket')
    currentConnections++;
    socket.name = "d" + currentConnections;
    console.log(socket.name);
    server.clients.push(socket);
    socket.setEncoding('utf-8');
    socket.on('data', function(message) {
        //console.log(con.getPinConfig(1));
        var spl = message.split(" ");
        console.log(message);
        console.log(spl);
    });
});

module.exports = server;