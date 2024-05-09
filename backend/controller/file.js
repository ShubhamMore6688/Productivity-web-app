import { Files } from "../models/file.js";
import { Trash } from "../models/trash.js";

export const createFile = async (req, res) => {
    const {filename, filecontent} = req.body;

    try {
        let file = await Files.findOne({filename})

    if(file){
        file.filecontent = filecontent;
        res.status(200).json({
            success: true,
            message: file
        })
    }else{
       file = await Files.create({
            filename, 
            filecontent
            
        });

        res.status(200).json({
            success: true,
            message: file
        })
    }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }

    
}

export const getAllFiles = async (req, res) => {

    try {
        let files = await Files.find()

        res.status(200).json({
            success: true,
            files
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }

   
}

export const updateFileContent = async (req,res) => {
    const {filename} = req.params;
    const {filecontent} = req.body;

    try {
        const updateFile = await Files.findOneAndUpdate({filename}, {filecontent}, {new: true});
        if(updateFile){
            res.status(200).json({
                success: true,
                message: updateFile
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }

    
}

export const getFileContent = async (req,res) => {
    const {filename} = req.params;
    const requiredFile = await Files.find({filename});
    console.log(requiredFile)
    if(requiredFile){
        res.status(200).json({
            success: true,
            message: requiredFile
        })
    }else{
        res.status(404).json({
            success:false,
            message: "file not found"
        })
    }
}

export const deleteFile = async (req, res) => {
    const {fileId} = req.params;

    try {
        const file = await Files.findOne({_id: fileId})
        if(!file){
            res.status(404).json({
                success: false,
                message: "file not found"
            })
        } 
        const deletedFile = new Files(file.toObject());
        await Trash.create(deletedFile);
        await Files.findOneAndDelete({_id: fileId});
        console.log("file deleted")
        res.status(200).json({
            success: true,
            message: "file deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }

    
}

export const getTrashFiles = async (req, res) => {

    try {
        let trashfiles = await Trash.find()

        res.status(200).json({
            success: true,
            trashfiles
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }

   
}