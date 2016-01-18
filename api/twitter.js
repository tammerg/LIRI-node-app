var keys = require("../keys.js");
module.exports = function twitter(){
  var Twitter = require('twitter');
    var client = new Twitter({
      consumer_key: keys.twitterKeys.consumer_key,
      consumer_secret: keys.twitterKeys.consumer_secret,
      access_token_key: keys.twitterKeys.access_token_key,
      access_token_secret: keys.twitterKeys.access_token_secret
    });
    client.get('statuses/user_timeline', function(tweets, response){
      for (var i = 0; i < 20; i++) {
        console.log(response[i].text);
        console.log(response[i].created_at)
   };
  });
}
