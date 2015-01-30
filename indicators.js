#!/usr/bin/env node

console.log('indicators.js starting ...');

var express = require('express');
var app = express();
var fs = require('fs');
var ejs = require('ejs');


app.get('/', function(req, res, next) {
    fs.readFile('tpl/indicator-show.html', {encoding: 'utf-8'}, function (err, data) {
        if (err) { // code are described in libUV in github
            console.log(err);
            res.statusCode = 500;
            res.end('Tpl error');
        }
        else {
            res.setHeader('Content-Type', 'text/html');
            //var html = new ejs(tpl).render(data);
            res.send(data);
            res.end();
        }
    });
});

console.log('indicators.js binging port 4000');
app.listen(4000);
console.log('indicators.js started')