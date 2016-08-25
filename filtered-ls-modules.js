var filteredLs = require('./filtered-ls/index');
var dir = process.argv[2];
var ext = process.argv[3];

filteredLs(dir, ext, function(err, files) {
	if (err) {
		console.log('ERROR');
	} else {
		files.map(function(file) {
			console.log(file);
		});
	}
});
