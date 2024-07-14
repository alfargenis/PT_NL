import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jwt.js';
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

//Resgister
export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const [userFoundByEmail, userFoundByUsername] = await Promise.all([
      User.findOne({ email }),
      User.findOne({ username }),
    ]);

    const errors = [];
    if (userFoundByEmail) errors.push('The email already exists');
    if (userFoundByUsername) errors.push('The username already exists');

    if (errors.length > 0) return res.status(400).json(errors);

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });
    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });
    res.cookie('token', token);
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
    });
  } catch (error) {
    res.status(500).json({ Message: 'Username o email exist' });
  }
};

//Login
export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const userFound = await User.findOne({ username });
    const errors = [];

    if (!userFound) {
      errors.push('Username not found');
    } else {
      const isMatch = await bcrypt.compare(password, userFound.password);
      if (!isMatch) {
        errors.push('Invalid password');
      }
    }

    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    const token = await createAccessToken({ id: userFound._id });
    res.cookie('token', token);
    res.json({
      id: userFound._id,
      username: userFound.username,
    });
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
};

//Logout
export const logout = (req, res) => {
  res.cookie('token', '', { expires: new Date(0) });
  return res.sendStatus(200);
};

//perfil
export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);
  if (!userFound) return res.status(400).json({ message: 'User not found' });
  res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
  res.send('profile');
};

//verify token
export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.status(401).json({ message: 'Unauthorized' });
    const userFound = User.findById(user.id);
    if (!userFound) return res.status(401).json({ message: 'User not found' });
    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};
