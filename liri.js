
var omdb = require("./api/movies.js");
var twitter = require("./api/twitter.js");
var spotify = require("./api/spotify.js");
var command = process.argv[2];       
var searchQuery = []
for (var i = 3; i < process.argv.length; i++) {
  searchQuery += " " + process.argv[i]};


switch(command) {
  case "music":
  case "spotify":
  case "spotify-this-song":
    result = spotify(searchQuery);
    break;

  case "twitter":
  case "twits":
  case "my-tweets":
    result = twitter(searchQuery);
    break;

  case "movie":
  case "movie-this":
    result = movie(searchQuery);
    break;

    default:
    result = console.log("Refine your search");
  }