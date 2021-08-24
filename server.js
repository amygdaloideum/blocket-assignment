const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

// Store mutable chat in memory
const history = [];

io.on('connection', socket => {
  socket.on('CHAT/NEW_USER', ({ user }) => addUser(io, user));
  socket.on('CHAT/SEND_MSG', data => addMessage(io, data, 'user'));
});

server.listen(3001, () => console.log('listening on *:3001'));

function addMessage(io, { user, text }, src) {
  if (history.length >= 50) history.shift();
  history.push({ user, text, src });
  io.emit('CHAT/UPDATE', history);
}

function addUser(io, user) {
  return addMessage(
    io,
    { user: null, text: `${user.username} has joined the chat` },
    'system'
  );
}
