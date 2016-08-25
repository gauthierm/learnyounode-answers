var http = require('http');
var bl = require('bl');

var urls = process.argv.slice(2);
var responses = [];
var complete = 0;

function done() {
	responses.forEach(function(data) {
		console.log(data);
	});
}

urls.forEach(function(url, index) {
	http.get(url, function(response) {
		response.pipe(bl(function(err, data) {
			responses[index] = data.toString();
			complete++;
			if (complete === urls.length) {
				done();
			}
		}));
	});
});
