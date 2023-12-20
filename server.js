const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public', { extensions: ['html'] }));

io.on('connection', (socket) => {
  socket.on('highlight', (line) => {
    socket.broadcast.emit('highlight', line);
    console.log('highlight', line);
  });
});

io.on('connection', (socket) => {
  socket.on('juhlayo', (line) => {
    socket.broadcast.emit('juhlayo', line);
    console.log('juhlayo', line);
  });
});

server.listen(3000, () => {
  console.log('Listening on port 3000');
});