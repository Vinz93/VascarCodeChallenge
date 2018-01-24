import socketio from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const initialState = [
  {
    name: 'Vascar',
    pnl: 50,
    volume: 1000,
    position: 10000,
  },
  {
    name: 'Trevon James',
    pnl: 30,
    volume: 300,
    position: 9000,
  },
  {
    name: 'Haejin',
    pnl: 90,
    volume: 3000,
    position: 5000,
  },
];

function fluctuation(accounts) {
  return accounts.map(({ pnl, volume, position, name }) => {
    const date = new Date();
    const q = date.getSeconds();
    if (q % 2 === 0) {
      return {
        name,
        pnl: pnl + q,
        volume: volume + q,
        position: position + q,
      };
    }
    return {
      name,
      pnl: pnl - q,
      volume: volume + q,
      position: position - q,
    };
  });
}

io.on('connection', socket => {
  let state = initialState;
  setInterval(() => {
    socket.emit('update', state);
    state = fluctuation(state);
  }, 3500);
});

server.listen(3330);
