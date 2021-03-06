//#!/usr/bin/env node

// TextWrangler
console.log('server starting ...');
// http://nodeguide.ru/doc/
var argv = require('optimist')
	.usage('Usage: $0 -host [name] -port [num]')
	.demand(['host', 'port'])
	.default('host', 'localhost')
	.default('port', 4000)
	.argv;
console.log('server host: ' + argv.host + ':' + argv.port);
var debug = require('debug')('app.js');

// http://expressjs.com/api.html#app-settings
var express = require('express');
var app = express();
// https://www.npmjs.com/package/node-static
var static = require('node-static');
var file = new static.Server('./public');
// https://www.npmjs.com/package/ejs
var ejs = require('ejs');
// https://docs.nodejitsu.com/articles/file-system/how-to-read-files-in-nodejs
// http://nodejs.org/api/fs.html#fs_fs_read_fd_buffer_offset_length_position_callback
var fs = require('fs');

app.get('/', function (req, res, next){
        debugger;
		//res.writeHead(200, {'Content-Type': 'text/html'});
		var tpl = fs.readFileSync('tpl/show.html', 'utf8');
// http://www.w3schools.com/html/html5_canvas.asp
// http://habrahabr.ru/post/111308/
        res.send(tpl);
        //console.log(tlp);
        res.end();
	});

app.get('/test', function (req, res){
		//res.writeHead(200, {'Content-Type': 'text/plain'});
		res.send('okay2');
	});

app.listen(argv.port);
console.log('server started');


