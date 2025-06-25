import http from "node:http";
import {serverPageHtml} from "./server-page.js";

const PORT = 3050;

const server = http.createServer((request, response)=> {
  response.statusCode = 200;
  // response.setHeader('Content-Type', 'text/plain; charset=UTF-8');
  response.setHeader('Content-Type', 'text/html; charset=UTF-8');
  response.write("Write!");
  response.write('<h1>Hello, my server )))</h1>');

  console.log(request.url); // request's url

  if (request.url === '/test-url') {
    console.log("request test-url:", request.url);
    response.end('<h1> Test is OK</h1>');
    return;
  }

  // if (request.url === '/css') {
  //   response.setHeader ('Content-Type', 'text/css');
  //   response.write( '' +
  //     '      body {\n' +
  //     '      background-color: lightblue;\n' +
  //     '    }' +
  //     '    ');
  //   response.end();
  //   return;
  // }

  response.write('Хе');
  response.write(serverPageHtml);

  // response.end(`Ку-ку :))) Hello from Jemm, server.js! Port: ${PORT}`); // End of response - final operation.
  response.end(); // Empty end if we write.
});

// Starting the server
server.listen( PORT, () => {
  console.log(`Yessss!!! Server started on port ${PORT}`);
});

