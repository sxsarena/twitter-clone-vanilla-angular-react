var express = require('express');
var proxy = require('http-proxy-middleware');
var request = require('request');

var app = express();

var configToken = {
  method: 'POST',
  url: 'https://api.twitter.com/oauth2/token',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Authorization': 'Basic bWVjaTllbUI3MjA1Ymo0VzQ0eFFDQVRVNjowR0RKWWFUeDg1bkRwbm9pOHp3R2EwVDdNU1FJT1J0OVJkS3Y2aEFmRFNSb0QzUjRGUA=='
  },
  body: 'grant_type=client_credentials',
  encoding: 'UTF-8'
};

app.use(express.static('public'));

request(configToken, function (error, response, body) {
  var data = JSON.parse(body);
  var configProxy = {
    target: 'https://api.twitter.com/',
    changeOrigin: true,
    headers: {
      Authorization: 'Bearer '+ data.access_token
    }
  };

  app.use('/1.1', proxy(configProxy));

  app.listen(3000);
});




