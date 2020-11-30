import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyparser from 'body-parser';
import middlewares from './src/middlewares/Middlewares.js';
import config from './config/Config.js';
import userRoutes from './src/routes/User.routes.js';

dotenv.config();
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(helmet());
app.use(morgan('common'));

app.get('/test', (request, response) => {
  response.send('Det funkar - TEST');
});

userRoutes.routes(app);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

config.connectToDatabase();
config.connectToPort(app);