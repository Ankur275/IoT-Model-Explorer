import express from 'express';
import { signup, login, resetPasswordRequest, resetPassword } from '../controllers/userController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/resetPasswordRequest', resetPasswordRequest);
router.post('/resetPassword/:resetToken', resetPassword);

export default router;
