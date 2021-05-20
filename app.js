const express = require('express')
const app = express()
const port = 8080

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

app.get('/wives', (req, res) => {
    res.send(Sinatra.wives.join(', '));
});

app.listen(port, () => {
  console.log(`Example app listening at http://web-af66687d2-fadb.docode.qwasar.io`)
});