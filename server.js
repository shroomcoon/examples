// const Game = require('./sc-modules/core')
// Game.on('update', () => {console.log('Yo, man!')})
// Game.run()

const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(5000, () => {
    console.log("Server running.");
});
