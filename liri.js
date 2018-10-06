// require("dotenv").config();

// var spotify = require("keys.js")

var command = process.argv[2];
var query = process.argv[3];



// Include the request npm package (Don't forget to run "npm install request" in this folder first!)

var movieThis = function(movieQuery) {

var request = require("request");

// Store all of the arguments in an array

// Create an empty variable for holding the movie name
var movieName = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < movieQuery.length; i++) {

  if (i > 2 && i < movieQuery.length) {

    movieName = movieName + "+" + movieQuery[i];

  }

  else {

    movieName += movieQuery[i];

    console.log(movieQuery.length)

  }
}

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Movie Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("IMDB rating: " + JSON.parse(body).imdbRating);
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Movie Language: " + JSON.parse(body).Language);
    console.log("Movie Plot: " + JSON.parse(body).Plot);
    console.log("Movie Actors: " + JSON.parse(body).Actors);     
  }
});
}


if(command === "movie-This"){
    movieThis(query)
}