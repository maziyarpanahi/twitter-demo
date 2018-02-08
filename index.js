let today = new Date();
let twitter_helpers = require('./config/TwitterAuth');




let TwitterStreaming = twitter_helpers.twitterAuth.stream('statuses/filter', {
    track: "big data,bigdata,apple,google,twitter"
});
TwitterStreaming.on('tweet', function (tweet) {
    if(tweet.id){
        console.log(tweet.text);


    }
});
TwitterStreaming.on('error', function(error, code) {
    console.log("TwitterStreaming error: " + error + ": " + code);
});
TwitterStreaming.on('disconnect', function (response) {
    // Handle a disconnection
    today = new Date();
    console.log("TwitterStreaming disconnect: ", today, response);
    // process.exit();
});
TwitterStreaming.on('warning', function (response) {
    today = new Date();
    console.log("TwitterStreaming warning: ", today, response);
});
TwitterStreaming.on('connect', function (response) {
    today = new Date();
    console.log("TwitterStreaming connect: ", today);
});
TwitterStreaming.on('reconnect', function (request, response, connectInterval) {
    today = new Date();
    console.log("TwitterStreaming reconnect: ", today);

    console.log("response", response.statusCode);
    console.log("connectInterval", connectInterval);
});
TwitterStreaming.on('user_event', function (eventMsg) {
    today = new Date();
    console.log("TwitterStreaming user_event: ", today);
});
TwitterStreaming.on('end', function (response) {
    today = new Date();
    console.log("TwitterStreaming end: ", today, response);
});