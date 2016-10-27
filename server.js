var CKEY = process.env.TWITTER_KEY;
var CSECRET = process.env.TWITTER_SECRET;
var ATOKEN = process.env.TWITTER_ACCESS_TOKEN;
var ASECRET = process.env.TWITTER_ACCESS_SECRET
var express = require('express');
var Twit = require('twit');

var app = express();

var T = new Twit({
  consumer_key:       CKEY,
  consumer_secret:    CSECRET,
  access_token:       ATOKEN,
  access_token_secret:ASECRET
})

app.use(express.static('public'));

app.get('/twit', function(req, res) {
  res.send('data from the server');
});

app.listen(1983);
