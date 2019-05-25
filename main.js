/*
File Name 		: main.js
Author			: Sachin
Version			: 1.0
Date			: 09 Mar 2019
Description		: Initailaizes the server.                 
*/
global.__base = __dirname + '/';
var express = require('express');
var mongoose = require('mongoose');
var async = require('async');
var http = require('http');
var path = require('path');

var port = (process.env.PORT || '3000');
var server = require(global.__base +'server.js');
var Server = new server();

Server.init(function(err, data){
	if(err)
	{
		console.log(err);
	}
	else
	{
		 console.log("ewew")
		var app = express();
		var routes = require(global.__base + 'routes');
		console.log("ewugiwye")
		app.set('port', port);
        app.use('/', routes)
		var server = http.createServer(app);
		server.listen(port, function(err, doc){
			console.log("Listening in port 300 !!!!")
		});
	}
});