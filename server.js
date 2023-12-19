const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
  socket.on('highlight', (line) => {
    socket.broadcast.emit('highlight', line);
    console.log('highlight', line);
  });
});

server.listen(3000, () => {
  console.log('Listening on port 3000');
});