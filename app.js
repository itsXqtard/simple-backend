const express = require('express')
const basicAuth = require('express-basic-auth')
const request = require('request');
const app = express()
const port = 8080

const server_responses = {
    public : "Everybody can see this page",
    protected : "Welcome, authenticated client",
    unauthorized : "401 Not authorized"
}

const sinatra_songs = [
    "My Blue Heaven", 
    "My First Edition", 
    "Nothing in Common", 
    "O Little Town of Bethlehem", 
    "Oh How I Miss You Tonight",
    "Oh! What It Seemed to Be", 
    "Oh, What a Beautiful Mornin'", 
    "Oh, You Crazy Moon", "Only Forever", 
    "Only the Lonely",
    "Our Love Affair", 
    "Pale Moon", 
    "Pass Me By", 
    "People Will Say We're in Love", 
    "Pick Yourself Up",
    "Sand and Sea", 
    "Satisfy Me One More Time", 
    "Say It", 
    "The Sea Song", 
    "The Second Time Around"
];

const sinatra_wives = [
    "Nancy Barbato", 
    "Ava Gardner", 
    "Mia Farrow", 
    "Barbara Marx"
];


/**
 * Object containing Frank Sinatra's information
 */
const Sinatra = {
    birth_date : "December 12, 1915",
    birth_city : "Hoboken, New Jersey, U.S.",
    wives : sinatra_wives,
    songs : sinatra_songs
}
/**
 * Returns a random song by Frank Sinatra from a list of 20 songs.
 */
app.get('/', (req, res) => {
    var randomIndex = Math.floor((Math.random() * sinatra_songs.length));
    var song = Sinatra.songs[randomIndex];
  res.send(song);
});

/**
 * Returns the birth date of Frank Sinatra
 */
app.get('/birth_date', (req, res) => {
    res.send(Sinatra.birth_date);
});


/**
 * Returns the birth place where Frank Sinatra was born
 */
app.get('/birth_city', (req, res) => {
    res.send(Sinatra.birth_city);
});

/**
 * Returns all of Frank Sinatra's wives has was married to
 */
app.get('/wives', (req, res) => {
    res.send(Sinatra.wives.join(', '));
});


/**
 * Returns Frank Sinatra's self portrait
 */
app.get('/picture', async (req, res) => {
  const picture = '(https://upload.wikimedia.org/wikipedia/commons/a/af/Frank_Sinatra_%2757.jpg)';
  res.send(picture);

});

/**
 * Returns a response that anybody can reach without having certain permissions
 */
app.get('/public', (req, res) => {
    res.send(server_responses.public);
});


/**
 * Basic authorization with access using credentials in the URL and 
 * accessing the protected endpoint
 * 
 * scheme - username:password@
 * the scheme is added to front of url 
 * e.g. username:password@web-XXXX.docode.qwasar.io
 * 
 * Returns an unauthorized response if url does not have 
 * correct credentials passed into url using the protected endpoint
 */
app.use(basicAuth({
    users: { 'admin': 'admin' },
    unauthorizedResponse : `${server_responses.unauthorized}`
}))

/**
 * Returns a server response for authorized when the correct 
 * credentials are passed into url using the protected endpoint
 */
app.get('/protected', (req, res) => {
    console.log("credentials", req.auth);
    res.send(server_responses.protected);
});


app.listen(port, () => {
    console.log(`Your server will be accessible at this URL at http://web-XXXXXXXXX-XXXX.docode.qwasar.io`);
    console.log("Replace XXXXXXXXX-XXXX with your docode ID. The value before .docode.qwasar.io in the url");
});