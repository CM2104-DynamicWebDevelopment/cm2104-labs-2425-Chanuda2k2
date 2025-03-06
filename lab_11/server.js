var express = require('express');
var knockknock = require('knock-knock-jokes');
var app = express();


app.get('/', function(req, res){
 res.send("Hello world! by express");
});

app.get('/test', function(req, res){
    res.send("this is route 2");
   });
app.listen(8080);

app.get('/joke', function(req, res){
    res.send(knockknock());
   });