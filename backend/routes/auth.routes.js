import express from 'express';
import { Logout, Signup, Login } from "../controller/auth.controller.js";

const router = express.Router();

router.get('/login', login);
router.get('/logout', logout);
router.post('/signup', signup);


export default router;
