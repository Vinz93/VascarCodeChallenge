import socketio from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', socket => {
  let pnl = 0;
  setInterval(() => {
    socket.emit('pnl', pnl);
    pnl += 1;
  }, 3500);
});

server.listen(3330);
