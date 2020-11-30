import userModel from '../models/User.model.js';
import UserRoutes from '../routes/User.routes.js';

const createUser = async (req, res) => {
  const user = new userModel({
    username: req.body.username,
    password: req.body.password,
  });
  try {
    const response = await user.save();
    res.status(201).send(response);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getAllUser = async (req, res) => {
  try {
    const response = await userModel.find();
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getUserWithId = async (req, res) => {
  try {
    const response = await userModel.findById(req.params.userId);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({
      message: 'Error trying to retrieve use with ID ' + req.params.userId,
      error: error.message,
    });
  }
};

const getUserWithUsername = async (req, res) => {
  try {
    const response = await userModel.find({ username: req.query.username });
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({
      message:
        'Error occured while trying to retrieve user' + req.query.username,
      error: error.message,
    });
  }
};

export default {
  createUser,
  getAllUser,
  getUserWithId,
  getUserWithUsername,
};
