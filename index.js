const Twit = require('twit')
const fs = require('fs')
require('dotenv').config()


const T = new Twit({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms: 60*1000,
    strictSSL: false,
})

var stream = T.stream('statuses/filter', { track: '@vijaygenius123' });


stream.on('tweet', tweet => {
    const json = JSON.stringify(tweet, null, 2);
    fs.writeFile('tweet.json', json, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    console.log(tweet)
});