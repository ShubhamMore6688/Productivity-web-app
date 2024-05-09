import express from "express";
import { createFile, deleteFile, getAllFiles, getFileContent, updateFileContent } from "../controller/file.js";


 const router = express.Router();

router.post('/file', createFile);
router.get('/file', getAllFiles);
router.put('/file/:filename', updateFileContent);
router.get('/file/:filename', getFileContent);
router.delete('/file/:fileId', deleteFile);

export default router
