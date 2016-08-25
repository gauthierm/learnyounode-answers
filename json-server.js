var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function (request, response) {
	if (request.method == 'GET') {
		var parsedUrl = url.parse(request.url, true);
		if (!parsedUrl.query.iso) {
			response.writeHead(400);
			return response.end('iso param required');
		}

		var time = new Date(parsedUrl.query.iso);

		if (parsedUrl.pathname == '/api/parsetime') {
			var data = {
				hour: time.getHours(),
				minute: time.getMinutes(),
				second: time.getSeconds()
			};
			response.writeHead(200, {'Content-Type': 'application/json'});
			response.end(JSON.stringify(data));
		} else if (parsedUrl.pathname == '/api/unixtime') {
			var data = {
				unixtime: time.getTime()
			};
			response.writeHead(200, {'Content-Type': 'application/json'});
			response.end(JSON.stringify(data));
		} else {
			response.writeHead(404);
			response.end('Unknown API endpoint');
		}
	} else {
		response.writeHead(400);
		response.end('expected GET\n');
	}
});

server.listen(port);
