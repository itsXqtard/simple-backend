const express = require('express')
const app = express()
const port = 8080

const sinatra_songs = [
    "My Blue Heaven", "My First Edition", "Nothing in Common", "O Little Town of Bethlehem", "Oh How I Miss You Tonight",
    "Oh! What It Seemed to Be", "Oh, What a Beautiful Mornin'", "Oh, You Crazy Moon", "Only Forever", "Only the Lonely",
    "Our Love Affair", "Pale Moon", "Pass Me By", "People Will Say We're in Love", "Pick Yourself Up",
    "Sand and Sea", "Satisfy Me One More Time", "Say It", "The Sea Song", "The Second Time Around"
    ]

app.get('/', (req, res) => {
    var randomIndex = Math.floor((Math.random() * sinatra_songs.length));
    var song = sinatra_songs[randomIndex];
  res.send(song);
})

app.listen(port, () => {
  console.log(`Example app listening at http://web-af66687d2-fadb.docode.qwasar.io`)
})