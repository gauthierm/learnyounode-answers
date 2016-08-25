var net = require('net');
var port = process.argv[2];
var strftime = require('strftime');

var server = net.createServer(function(socket) {
	var time = strftime('%F %H:%M', new Date());
	socket.end(time + "\n");
});

server.listen(port);

