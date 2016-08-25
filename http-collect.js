var http = require('http');
var bl = require('bl');

var url = process.argv[2];

http.get(url, function(response) {
	response.pipe(bl(function(err, data) {
		var string = data.toString();
		console.log(string.length);
		console.log(string);
	}));
});
