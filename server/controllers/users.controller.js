import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

//list users
// export const getUsers = async (req, res) => {
//   const { page, count } = req.query;
//   try {
//     const users = await User.find()
//       .skip((page - 1) * count)
//       .limit(parseInt(count));
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

export const getUsers = async (req, res) => {
  const { page, count } = req.query;
  try {
    const usersCount = await User.countDocuments();
    const users = await User.find()
      .skip((page - 1) * count)
      .limit(parseInt(count));
    res.json({ data: users, totalPages: Math.ceil(usersCount / count) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get user
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Update user
export const updateUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.username = username || user.username;
    user.email = email || user.email;
    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }
    await user.save();
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Delete user
export const deleteUser = async (req, res) => {
  try {
    const userDelete = await User.findByIdAndDelete(req.params.id);
    if (!userDelete) {
      res.json({ message: 'User not found' });
    } else {
      res.json({ message: 'User deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
