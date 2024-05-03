import express from "express";
import { getUser, login, register } from "../controller/user.js";


const router = express.Router();

router.post('/signup', register);
router.get('/login', login);
// router.get('/', getUser);
export default router;