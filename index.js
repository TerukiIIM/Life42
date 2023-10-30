const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const PORT = 3000

const cardRouter = require("./routes/cards");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use("/", express.static(`${__dirname}/src`));
app.use('/card', cardRouter);

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("Game", () => {
    io.emit('hi');
  })
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})