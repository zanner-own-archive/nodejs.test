var http = require('http');

var server = new http.Server(); // EventEmitter

server.listen(1337, '127.0.0.1');

var counter = 0;

var emit = server.emit;
server.emit = function(event /*, arg1, arg2,... */) {
	console.log(event);
	emit.apply(server, arguments);
};

server.on('request', function (req, res) {
	res.end("Привет мир! " + ++counter);
});