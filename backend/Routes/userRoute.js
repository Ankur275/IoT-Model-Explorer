import express from 'express';
import { signup, login, resetPasswordRequest, resetPassword, logout } from '../controllers/userController.js';
import { verifyJWT } from '../middleware/authMiddleware.js';

const router = express.Router();

// router.post('/signup', signup);
// router.post('/login', login);
// router.post('/resetPasswordRequest', resetPasswordRequest);
// router.post('/resetPassword/:resetToken', resetPassword);


router.route('/signup').post(signup)
router.route('/login').post(login)
router.route('/resetPasswordRequest').post(resetPasswordRequest)
router.route('/resetPassword/:resetToken').post(resetPassword)
router.route('/logout').post(verifyJWT, logout)
export default router;
