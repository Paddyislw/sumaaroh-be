import express from 'express';
import * as userController from '../controllers/UserController';

const router = express.Router();

router.post('/users', userController.createUser);
router.get('/users/:email', userController.getUserByEmail);

export default router;