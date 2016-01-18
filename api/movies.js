module.exports = function omdb(searchQuery){
var request = require('request');
var movieInput = searchQuery;

request("http://www.omdbapi.com/?t=" + movieInput +"&y=&plot=long&tomatoes=true&r=json", function(error, response, body) {
  var movieInfo = JSON.parse(body);
    console.log(movieInfo.Title)
    console.log(movieInfo.Year)
    console.log(movieInfo.imdbRating)
    console.log(movieInfo.Country)
    console.log(movieInfo.Language)
    console.log(movieInfo.Plot)
    console.log(movieInfo.Actors)
    console.log(movieInfo.tomatoUserRating)
    console.log(movieInfo.tomatoURL)
});
}