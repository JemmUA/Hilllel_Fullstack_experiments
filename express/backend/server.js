import express from 'express';

const PORT = 3003;
const app = express();

const annoyingUser = (request, response) => {
  response.send('You again? Well, hello ;))');
};

const userInfo = (request, response) => {
  response.send(`<h2>User ID: ${request.params.id}</h2>`);
};

app.get('/', (request, response) => {
  response.status(200).send('Hello from Express server!');
});

app.get('/rerequests', annoyingUser);


// app.get('/users/:id', userInfo);
app.route('/users/:id')
  .get(userInfo);



app.listen(PORT, () => {
  console.log(`Express server has started at port: ${PORT}`);
});