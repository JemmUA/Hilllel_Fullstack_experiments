import http from "node:http";

const PORT = 3050;

const server = http.createServer((request, response)=> {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end(`Hello from Jemm, server.js! Port: ${PORT}`)
});

server.listen( PORT, () => {
  console.log(`Yessss!!! Server started on port ${PORT}`);
});

