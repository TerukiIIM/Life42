const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const PORT = 3000

// Require Router for express
const cardsRouter = require("./routes/cardsRouter");


const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use("/", express.static(`${__dirname}/src`));

app.use('/card', cardsRouter);

const onConnection = (socket) => {
}

io.on('connection', onConnection);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})