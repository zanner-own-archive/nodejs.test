// http://127.0.0.1:1337/echo?message=Hello -> Hello

var http = require('http');
var url = require('url');

var server = new http.Server(function(req, res) {
	console.log(req.headers);
	/**/
	var urlParsed = url.parse(req.url, true);
	console.log(urlParsed);

	if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
		res.statusCode = 200;
		res.writeHead(200, "Ok", {'Cache-control': 'no-cache'}); // немедленная отправка
		res.setHeader('Cache-control', 'no-cache'); // removeHeader
		res.end(urlParsed.query.message);
	} else {
		res.statusCode = 404;
		res.end('Page not found');
	}
	/**/
	res.end();
});

server.listen(1337, '127.0.0.1');
