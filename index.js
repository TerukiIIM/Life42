const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const path = require('path');

const PORT = 3000

const PLAYER_NAME_LIST_BASE = ["CosmicWanderer", "ByteDancer", "PixelArtist", "Enigma101", "Stargazer88", "DigitalDreamer", "CyberWizard", "CodeSamurai", "VirtualExplorer", "TechNinja"];
var USABLE_NAME_LIST = ["CosmicWanderer", "ByteDancer", "PixelArtist", "Enigma101", "Stargazer88", "DigitalDreamer", "CyberWizard", "CodeSamurai", "VirtualExplorer", "TechNinja"];

// Require Router for express
const cardsRouter = require("./routes/cardsRouter");

// Require GameSystem
const PlayService = require('./services/playService');
const PlayerService = require("./services/playerService");

const GameObject = new PlayService();


const app = express();
const server = http.createServer(app);
const io = socketio(server);


app.use("/js", express.static('src/js'));
app.use("/css", express.static('src/css'));
app.use("/assets", express.static('src/assets'));

app.use("/play", (req, res) => {
  res.sendFile(path.join(__dirname, '/src/play.html'));
});

app.use("/howtoplay", (req, res) => {
  res.sendFile(path.join(__dirname, '/src/howToPlay.html'));
});

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/src/index.html'));
});

app.use('/card', cardsRouter);

const onConnection = (socket) => {
  console.log("connected");
  socket.on('disconnect', function() {
    
  })
  socket.on("player:joingame", () => {
    var random = Math.floor(Math.random() * USABLE_NAME_LIST.length);
    var choosenName = USABLE_NAME_LIST.splice(random, 1)[0];
    var playerIndex = GameObject.addPlayer(new PlayerService(choosenName));
    socket.emit("player:givename", {player: choosenName, playerIndex: playerIndex});
    socket.broadcast.emit(`The player ${choosenName} has connected`);
  })
}

io.on('connection', onConnection);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})