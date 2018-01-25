import socketio from 'socket.io';
import socketioClient from 'socket.io-client';
import AccountState from '../models/account-state';

import http from 'http';
const pools = new Map();

function setup(app, port) {
  const server = http.createServer(app);
  const io = socketio(server);
  server.listen(port);
  return io;
}

function socket(app, port = 3335) {
  const io = setup(app, port);

  io.on('connection', (socket) => {
    console.log(`user ${socket.id} connected`);

    socket.on('trade/pair', async (pair) => {
      const users = pools.get(pair) || {};
      if (!users[socket.id]) {
        users[socket.id] = true;
        pools.set(pair, users);
      }
    });

    socket.on('subscribeToTimer', (interval) => {
      console.log('client is subscribing to timer with interval ', interval);
      setInterval(() => {
        socket.emit('timer', new Date());
      }, interval);
    });

    socket.on('disconnect', async () => {
      console.log('user disconnect');
      // const { user, room } = socket;
      // socket.leave(room);
    });
    const socketSimulator = socketioClient.connect('http://localhost:3330');
    socketSimulator.on('update', async (accounts) => {
      socket.emit('update', accounts);
      try {
        await AccountState.create(accounts);
      } catch (err) {
        console.log(err);
      }
    });
  });
}
export default socket;
