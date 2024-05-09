import express from "express";
import { createFile, deleteFile, getAllFiles, getFileContent, getTrashFiles, updateFileContent } from "../controller/file.js";


 const router = express.Router();

router.post('/file', createFile);
router.get('/file', getAllFiles);
router.put('/file/:filename', updateFileContent);
router.get('/file/:filename', getFileContent);
router.delete('/file/:fileId', deleteFile);
router.get('/trash', getTrashFiles)

export default router
