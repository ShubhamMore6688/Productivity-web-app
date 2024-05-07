import { Files } from "../models/file.js";

export const createFile = async (req, res) => {
    const {filename, filecontent} = req.body;

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
}

export const getAllFiles = async (req, res) => {
    let files = await Files.find()

    res.status(200).json({
        success: true,
        files
    })
}

export const updateFileContent = async (req,res) => {
    const {filename} = req.params;
    const {filecontent} = req.body;

    const updateFile = await Files.findOneAndUpdate({filename}, {filecontent}, {new: true});
    if(updateFile){
        res.status(200).json({
            success: true,
            message: updateFile
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