// var app = require('express')();
//var http = require('http').createServer(app);
// var io = require('socket.io')(http);
// var server  = require('http').createServer(app);
// var io      = require('socket.io').listen(server);

var http = require('http');
var app = express();
var server = http.createServer(app);

var io = require('socket.io').listen(server);
server.listen(app.get('port'));

// app.get('/', function(req, res){
//     res.send('<h1>Hello world</h1>');
// });

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('chat message', function(message){
        console.log('message: ' + JSON.stringify(message));
        io.emit('chat message', message);

    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});

