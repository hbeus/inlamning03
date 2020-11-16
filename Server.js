import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

dotenv.config();
const app = express();
app.use(helmet());
app.use(morgan('common'));
app.use(isAuthenticated);
const port = process.env.PORT;

app.get('/test', (request, response) => {
  response.send('Det funkar - TEST');
});

app.get('/user', (request, response) => {
  response.send('user');
});

function isAuthenticated(request, response, next) {
  console.log('Middleware function is running!');
  next();
}

app.listen(port, () => {
  console.log(`Servern är igång på Port ${port}`);
});
