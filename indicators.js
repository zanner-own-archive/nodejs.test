#!/usr/bin/env node

console.log('indicators.js starting ...');

var express = require('express');
var app = express();
var fs = require('fs');
var ejs = require('ejs');


app.get('/', function(req, res, next) {
    fs.readFile('tpl/indicator-show.html', function (tplErr, tplOk) {
        if (tplErr) {
            console.log(tplErr);
            res.statusCode = 500;
            res.end('Tpl error');
        }
        else {
            res.setHeader('Content-Type', 'text/html');
            //var html = new ejs(tpl).render(data);
            res.send(tplOk);
            res.end();
        }
    });
});

console.log('indicators.js binging port 4000');
app.listen(4000);
console.log('indicators.js started')