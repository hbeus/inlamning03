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
		response.length !== 0
			? res.status(200).send(response)
			: res
				.status(404)
				.send({ message: 'Could not find user ' + req.query.username });
	} catch (error) {
		res.status(500).send({
			message:
        'Error occured while trying to retrieve user' + req.query.username,
			error: error.message,
		});
	}
};

const updateUser = async (req, res) => {
	try {
		if (!req.body) {
			return res.status(400).send({ message: 'Cannot update empty values' });
		}
		const response = await userModel.findByIdAndUpdate(req.params.userId, {
			username: req.body.username,
			password: req.body.password,
		}, {new: true});
		res.status(200).send(response);
	} catch (error) {
		res.status(500).send({
			message: 'Error while updating values for user ID: ' + req.params.userId,
			error: error.message
		});
	}
};

const deleteUser = async (req, res) => {
  try {
    const response = await userModel.findByIdAndDelete(req.params.userId);
    res.status(200).send({
      message: `Succesfully deleted user $(response.username) and ID $(req.params.userId)`
    })
  } catch (error) {
    res.status(500).send({
      message: `Error while trying to delete user ` + req.params.userId,
      error: error.message,
    })
  }
}

export default {
	createUser,
	getAllUser,
	getUserWithId,
	getUserWithUsername,
  updateUser,
  deleteUser
};
