const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const path = require('path');

const PORT = 3000

// Require Router for express
const cardsRouter = require("./routes/cardsRouter");
const playRouter = require("./routes/playRouter");


const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use("/js", express.static('src/js'));
app.use("/css", express.static('src/css'));
app.use("/assets", express.static('src/assets'));

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/src/index.html'));
});

app.use("/play", (req, res) => {
  res.sendFile(path.join(__dirname, '/src/play.html'));
});

app.use("/howtoplay", (req, res) => {
  res.sendFile(path.join(__dirname, '/src/howToPlay.html'));
});

app.use('/card', cardsRouter);
app.use('/play', playRouter);

const onConnection = (socket) => {
  console.log("connected");
}

io.on('connection', onConnection);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})