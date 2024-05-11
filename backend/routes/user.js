import express from "express";
import { getUser, login, logout, register } from "../controller/user.js";


const router = express.Router();

router.post('/signup', register);
router.post('/login', login);
router.get('/logout', logout)
// router.get('/', getUser);
export default router;