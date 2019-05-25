//Npm packages
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var async = require('async');
var Promise = require('bluebird');
var http = require('http');
var request = require('request');
var cheerio = require('cheerio');
var crawler = require(global.__base + 'routes/crawler.js');
//var fs = require('fs');
var links = [];	

router.get('/runCrawler',runCrawler);

function runCrawler(req, res, next){
  request.get("https://medium.com/", function(err, response, body){    
    var $ = cheerio.load(body);
    $('.ds-link').each( function (i, element) {
      var a = $(this).prev();
      //console.log(element.attribs['data-post-id'])
      if(element.attribs['data-post-id']){
         // console.log("***************************************************************************")        
         // console.log(element.attribs.href)
          //links.push(element.attribs.href);
          var bucket = {
          	  Url : element.attribs.href 
          }
          var Crawler = new crawler(bucket);
          Crawler.save(bucket, function(err, dbData){  
          if(err){
            console.log(err);
            callback(err, null);
          }
          else{
          	console.log(dbData)
            callback(null, true);              
          };
       });   
      }
  });
    
    console.log(links);
  })
   .on('error', function(err) {
    console.log(err)
  })
}







module.exports = router;
