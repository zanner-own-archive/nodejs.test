var http = require('http');
var url = require('url');

var server = new http.Server();

server.on('request', function (req, res) {
	console.log( req.method, req.url, req.headers );
	var urlParsed = url.parse(req.url, true);
	console.log(urlParsed);
	res.end();
});

server.listen(4000, '127.0.0.1');
