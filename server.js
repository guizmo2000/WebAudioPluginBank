var http = require('http');
const url = require('url');
const fs = require('fs');
var fs2 = require('file-system');
const path = require('path');
var express = require('express');
const fetch = require('node-fetch')
var app = express();


app.listen(8080);

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+"/testers/fileLoader.html"))
});

app.get('/pluginList', function (req, res) {
  var tmp2;
  var results=[];
  console.log("/pluginList");
  var target = req.query.target;
  console.log(target);

  filewalker(target,(err, data) => {
    if (err) {
      throw err;
    }
    for (var i = 0; i< data.length; i++){
      console.log(data[i]);
      fetch(JSON.stringify(data[i])).then((jsonContent)=>{
        tmp2[i] = jsonContent.thumbnail;
      })
    }
    res.json(tmp2);
  });

});



function getExtension(filename) {
  var ext = path.extname(filename||'').split('.');
  return ext[ext.length - 1];
}

/**
 * Recursiv scan 
 */

function filewalker(dir, done) {
  let results = [];

  fs.readdir(dir, function (err, list) {
    if (err) return done(err);

    var pending = list.length;

    if (!pending) return done(null, results);

    list.forEach(function (file) {
      file = path.resolve(dir, file);

      fs.stat(file, function (err, stat) {
        // If directory, execute a recursive call
        if (stat && stat.isDirectory()) {
          // Add directory to array [comment if you need to remove the directories from the array]
          //results.push(file);

          filewalker(file, function (err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          if(getExtension(file) === "json"){
          results.push(file);
          }
          if (!--pending) done(null, results);
        }
      });
    });
  });
};