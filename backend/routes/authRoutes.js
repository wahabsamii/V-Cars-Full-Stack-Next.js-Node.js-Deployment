import express from 'express';
import { DELETEUSSER, getAllUsers, login, logout, myInfo, recentUsers, register, updateUser } from '../controllers/authControllers.js';
import upload from '../middlewares/multer.js';
import { adminOnly, protect } from '../middlewares/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/get', logout);
router.get('/user/:id',protect, myInfo);
router.post('/update/:id',protect, upload.single('profile'), updateUser);
router.get('/',protect, adminOnly, getAllUsers);
router.delete('/delete/:id',protect, adminOnly, DELETEUSSER);

router.get('/recent', recentUsers);
export default router;