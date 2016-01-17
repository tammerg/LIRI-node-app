var request = require('request');
var movieInput =  searchItem;


request("http://www.omdbapi.com/?t=" + movieInput +"&y=&plot=long&tomatoes=true&r=json", function(error, response, body) {
  var movieInfo = JSON.parse(body);
    console.log(movieInfo.Title)
});
}
