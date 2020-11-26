import userController from '../controllers/User.controller.js';

const routes = (app) => {
  app.post('/user', userController.createUser);
};

export default {
  routes,
};
