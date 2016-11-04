var CKEY = process.env.TWITTER_KEY;
var CSECRET = process.env.TWITTER_SECRET;
var ATOKEN = process.env.TWITTER_ACCESS_TOKEN;
var ASECRET = process.env.TWITTER_ACCESS_SECRET;
var express = require('express');
var Twit = require('twit');
var dataSet = require('./stagedData.js');
var app = express();

// var T = new Twit({
//   consumer_key:       CKEY,
//   consumer_secret:    CSECRET,
//   access_token:       ATOKEN,
//   access_token_secret:ASECRET
// })

app.use(express.static('public'));

// app.get('/twit', function(req, res) {
//   // T.get
//   res.send('data from the server');
// });

app.get('/staged', function(req, res) {
  var parsedData = [
    {
      username: 'zak',
      message: 'Do you want to go get coffee at Blue Bottle?'
    },
    {
      username: 'battenfield',
      message: 'Yes, but I"ll get kombucha instead.'
    }
  ];
  var tweets = dataSet.statuses;
  var messages = tweets.forEach(function(val) {
    console.log(val.text);
  });
  console.log(messages);
  // console.log(dataSet);
  res.send(parsedData);
});
app.listen(1983);
