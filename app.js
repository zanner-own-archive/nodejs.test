//#!/usr/bin/env node

console.log('server starting ...');
var argv = require('optimist')
	.usage('Usage: $0 -host [name] -port [num]')
	.demand(['host', 'port'])
	.default('host', 'localhost')
	.default('port', 4000)
	.argv;
console.log('server host: ' + argv.host + ':' + argv.port);

var express = require('express');
var app = express();
var ejs = require('ejs');
var fs = require('fs');

app.get('/', function (req, res){
		//res.writeHead(200, {'Content-Type': 'text/html'});
		fs.readFile('tpl/show.html', 'utf8', function (err, data) {
			if (err) throw err;
			res.send(data);
			//console.log(data);
		});
	});

app.get('/test', function (req, res){
		//res.writeHead(200, {'Content-Type': 'text/plain'});
		res.send('okay2');
	});

app.listen(argv.port);
console.log('server started');


