import express from "express";
import { createFile } from "../controller/file.js";
import { getUser } from "../controller/user.js";

 const router = express.Router();

router.post('/file', createFile);
router.get('/', getUser)

export default router
