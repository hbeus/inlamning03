import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

dotenv.config();
const app = express();
app.use(helmet());
app.use(morgan('common'));
// app.use(isAuthenticated);
const port = process.env.PORT;

app.get('/test', (request, response) => {
  response.send('Det funkar - TEST');
});

app.get('/user', isAuthenticated, (request, response) => {});

function isAuthenticated(request, response, next) {
  request.query.admin === 'true'
    ? response.send('You are an admin')
    : response.send('You cannot make call to this API URL');
  next();
}

app.listen(port, () => {
  console.log(`Servern är igång på Port ${port}`);
});
