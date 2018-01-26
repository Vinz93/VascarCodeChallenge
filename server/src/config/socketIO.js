import socketio from 'socket.io';
import socketioClient from 'socket.io-client';
import http from 'http';

import AccountState from '../models/account-state';

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


    socket.on('disconnect', async () => {
      console.log('user disconnect');
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
