#!/usr/bin/env node

console.log('indicators.js starting ...');

var express = require('express');
var app = express();
var ejs = require('ejs');


app.get('/', function(request, result, next) {
	var html = new ejs({url: 'tpl/indicator-show.html'}).render(data);
	result.send(html);
});

console.log('indicators.js binging port 4000');
app.listen(4000);
console.log('indicators.js started')