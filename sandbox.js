
var dotenv = require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({id:keys.spotify.id, secret:keys.spotify.secret});

 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data.tracks.items[0].album.artists[0].name); 
});   