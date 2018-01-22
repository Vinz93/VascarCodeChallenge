import socketio from 'socket.io';
import http from 'http';

function setup(app, port) {
  const server = http.createServer(app);
  const io = socketio(server);
  server.listen(port);
  return io;
}

function socket(app, port = 3335) {
  const io = setup(app, port);
  io.on('connection', (socket) => {
    console.log(`${socket.id}`);
    socket.on('join/chat', async req => {
      // const { room, token } = req;
      console.log(req);
    });

    socket.on('disconnect', async () => {
      // const { user, room } = socket;
      // socket.leave(room);
    });
  });
}

export default socket;
