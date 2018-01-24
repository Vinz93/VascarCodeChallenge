import socketio from 'socket.io';
import socketioClient from 'socket.io-client';
import http from 'http';
const pools = new Map();
const orders = [
  {
    type: 'buy',
    amount: 121,
    price: 0.11,
  },
  {
    type: 'sell',
    amount: 121,
    price: 0.12,
  },
  {
    type: 'buy',
    amount: 12,
    price: 0.10,
  },
];

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
      console.log(pools);
      console.log(` ${socket.id} want trade ${pair}`);
      socket.emit('orders', orders);
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
    socketSimulator.on('pnl', (pnl) => {
      console.log(`from simulator ${pnl}`);
      socket.emit('pnl', pnl);
    });
  });
}
export default socket;
