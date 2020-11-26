import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import middlewares from './src/middlewares/Middlewares.js';

dotenv.config();
const app = express();
app.use(helmet());
app.use(morgan('common'));

const port = process.env.PORT;

app.get('/test', (request, response) => {
  response.send('Det funkar - TEST');
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(port, () => {
  console.log(`Servern är igång på Port ${port}`);
});
