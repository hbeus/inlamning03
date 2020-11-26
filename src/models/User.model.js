import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    username: String,
    password: String,
  },
  { timestamps: true },
);

const userModel = mongoose.model('user', userSchema);

export default userModel;
