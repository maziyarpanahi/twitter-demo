let twit = require('twit');

let twitterAuth = new twit({
    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret: '',
    timeout_ms: 40000
});

exports.twitterAuth = twitterAuth;