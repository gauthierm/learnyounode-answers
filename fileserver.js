var fs = require('fs');
var http = require('http');
var port = process.argv[2];
var filename = process.argv[3];

var server = http.createServer(function (request, response) {
	var stream = fs.createReadStream(filename);
	stream.pipe(response);
});

server.listen(port);
