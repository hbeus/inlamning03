import UserController from '../controllers/User.controller.js';
import userController from '../controllers/User.controller.js';

const routes = (app) => {
  app.post('/user', userController.createUser);
  app.get('/user', userController.getAllUser);
  app.get('/user/:userId', UserController.getUserWithId);
  app.get('/searchuser', UserController.getUserWithUsername);
};

export default {
  routes,
};
