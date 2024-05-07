import express from "express";
import { createFile, getAllFiles, getFileContent, updateFileContent } from "../controller/file.js";


 const router = express.Router();

router.post('/file', createFile);
router.get('/file', getAllFiles);
router.put('/file/:filename', updateFileContent);
router.get('/file/:filename', getFileContent);

export default router
