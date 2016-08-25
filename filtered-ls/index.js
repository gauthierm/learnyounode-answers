var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
	ext = '.' + ext;
	var filtered = [];
	fs.readdir(dir, function(err, list) {
		if (err) {
			callback(err);
		} else {
			list.map(function(filename) {
				if (path.extname(filename) === ext) {
					filtered.push(filename);
				}
			});
			callback(null, filtered);
		}
	});
};
