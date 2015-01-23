var http = require('http');

var server = new http.Server();

server.listen(4000, '127.0.0.1');

var counter = 0;

server.on('request', function (req, res){
    res.end("Hello world! " + ++counter);
});