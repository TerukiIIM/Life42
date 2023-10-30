const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const PORT = 3000

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use("/", express.static(`${__dirname}/src`));

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})