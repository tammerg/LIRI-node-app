module.exports = function spotify(searchQuery){
var track = searchQuery;
var spotify = require("spotify");

 
spotify.search({ type: 'track', query: track }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);    
    }
    else {
      console.log(JSON.parse(data));
    }
  });
}