import openSocket from 'socket.io-client';
const URL = 'http://localhost:3335';
const socket = openSocket(URL);

function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}

function subscribeToPnl(cb) {
  socket.on('pnl', pnl => cb(null, pnl));
  socket.emit('trade/pair', 'btc/neo');
}

export { subscribeToTimer, subscribeToPnl };
