import {createServer} from 'node:http';
import express from 'express';
import cors from 'cors';
import {Server} from 'socket.io';

console.log("SOCKET!!!");

const PORT = 3021;

const app = express();
app.use(cors());
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log("Connected! YOOOOO!!! Client connected!");

  socket.on('message', (msg) => {
    console.log("Client said:", msg);
    socket.emit('replay', `You said: ${msg}`);
  });

  socket.on('disconnect', ()=> {
    console.log("Disconnected! Client disconnected");
  });

})

// Starting the socket server
server.listen( PORT, () => {
  console.log(`Yessss!!! Socket-Server has started on port ${PORT}`);
});