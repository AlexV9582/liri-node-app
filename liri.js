var keys      = require("./keys.js");
var fs        = require("fs");
var request   = require("request");
var twitter   = require("twitter");
var spotify   = require("node-spotify-api");
var userInput = process.argv;
var client    = new twitter(keys);
var spotify   = new spotify({
  id    : "fcf478871a544c62b3fb4f32863a297f",
  secret: "19e1426d0bc14cc38182354022f85782"
});
var artistName;
var songName;
var songLink;
var albumName;

console.log(userInput[2])
if (userInput[2] === "spotify-this-song") {
    var songTitle = userInput.slice(3, 40)
    spotify.search({ type: 'track', query: songTitle }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
 
    artistName = data.tracks.items[0].album.artists[0].name;
    songName   = data.tracks.items[0].name;
    songLink   = data.tracks.items[0].external_urls.spotify;
    albumName  = data.tracks.items[0].album.name;

    console.log(
      `Artist: ${artistName}
    Album Name: ${albumName}
    Song Name: ${songName}
    Link: ${songLink}`
    )

});
}
if (userInput[2] === "my-tweets") {
    var params = {screen_name: 'code_sandbox'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
    if (error) {
      console.log("ERROR" + " " + error)
    }
  });
}
  
