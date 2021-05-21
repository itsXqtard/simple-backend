const express = require('express')
const basicAuth = require('express-basic-auth')
const app = express()
const port = 8080

const server_responses = {
    public : "Everybody can see this page",
    protected : "Welcome, authenticated client",
    unauthorized : "Not authorized"
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

const sinatra_wives = ["Nancy Barbato", "Ava Gardner", "Mia Farrow", "Barbara Marx"];

const Sinatra = {
    birth_date : "December 12, 1915",
    birth_city : "Hoboken, New Jersey, U.S.",
    wives : sinatra_wives,
    songs : sinatra_songs
}

app.get('/', (req, res) => {
    var randomIndex = Math.floor((Math.random() * sinatra_songs.length));
    var song = Sinatra.songs[randomIndex];
  res.send(song);
});

app.get('/birth_date', (req, res) => {
    res.send(Sinatra.birth_date);
});

app.get('/birth_city', (req, res) => {
    res.send(Sinatra.birth_city);
});

app.get('/wives', (req, res) => {
    res.send(Sinatra.wives.join(', '));
});

app.get('/public', (req, res) => {
    res.send(server_responses.public);
});

app.use(basicAuth({
    users: { 'admin': 'admin' },
    unauthorizedResponse : `${server_responses.unauthorized}`
}))

app.get('/protected', (req, res) => {
    console.log("credentials", req.auth);
    res.send(server_responses.protected);
});


app.listen(port, () => {
    console.log(`Your server will be accessible at this URL at http://web-XXXXXXXXX-XXXX.docode.qwasar.io`);
    console.log("Replace XXXXXXXXX-XXXX with your docode ID. The value before .docode.qwasar.io in the url");
});