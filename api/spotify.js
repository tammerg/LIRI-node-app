module.exports = function spotify(searchQuery){
var track = searchQuery;
var spotify = require("spotify")

 
spotify.search({ type: 'track', query: track }, function(err, data) {
    if ( err ) {
      console.log('Error occurred: ' + err);    
    }
    else {
      console.log("preview url - " + data.tracks.items[0].preview_url);
      console.log("album name - " + data.tracks.items[0].album.name);
      console.log("artist name - "+ data.tracks.items[0].artists[0].name);
    }
  });
}