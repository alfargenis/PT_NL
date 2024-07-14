import { Router } from 'express';
import {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/users.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', authRequired, getUserById);
router.put('/users/:id', authRequired, updateUser);
router.delete('/users/:id', authRequired, deleteUser);

export default router;
