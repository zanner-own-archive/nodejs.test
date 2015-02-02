#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

function fileLoad (filePath, root, callErr, callOk) {
	try {
		filePath = decodeURIComponent(filePath);
	}
	catch (e) {
		callErr(-1, e);
	}

	if (~filePath.indexOf('\0')) {
		callErr(-2);
	}

	filePath = path.normalize(path.join(root, filePath));

	if (filePath.indexOf(root) !=0 ) {
		callErr(-3);
	}

	fs.stat(filePath, function (err, stats) {
		if (err || !stats.isFile()) {
			callErr(-4);
		}
		else {
			var mime = require('mime').lookup(filePath);
			var file = new fs.ReadStream(filePath);
			callOk(file, mime);
		}
	});
}

module.exports = function (filePath, root, callError, callOk) {
	fileLoad(filePath, root, callError, callOk);
}