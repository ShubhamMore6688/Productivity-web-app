import express from "express";
import { createFile, deleteFile, deleteTrashFile, getAllFiles, getFileContent, getTrashFiles, trashFileContent, updateFileContent } from "../controller/file.js";


 const router = express.Router();

router.post('/file', createFile);
router.get('/file', getAllFiles);
router.put('/file/:filename', updateFileContent);
router.get('/file/:filename', getFileContent);
router.get('/trash/:filename', trashFileContent);
router.delete('/file/:fileId', deleteFile);
router.delete('/trash/:fileId', deleteTrashFile);
router.get('/trash', getTrashFiles)

export default router
