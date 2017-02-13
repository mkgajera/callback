// JavaScript Document

var express = require('express');
var app = express();
var bodyParser = require('body-parser');   
var api = require("./api.js");
app.use(bodyParser.urlencoded({
        extended:true
 }));
 
 app.use(bodyParser.json());
 app.use(function (req, res, next) {
  //allow cross origin requests
  res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
 // res.header("Access-Control-Allow-Origin");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use("/js", express.static(__dirname + '/js'));
 app.get('/', function(req, res)
 {
	 res.sendfile('index.html', {'root' : "view"});
	 console.log("hello");
	 });
	 
	app.post("/add/record/detail",api.savedetail);//API for insert //
	
	  var server = app.listen(8081,function(){

       var port = server.address().port;
       var host = server.address().address;
       
       console.log("server run on port : 8081...");
 });