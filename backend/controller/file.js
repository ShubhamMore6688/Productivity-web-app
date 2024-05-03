import { Files } from "../models/file.js";

export const createFile = async (req, res) => {
    const {name, content} = req.body;

    let file = await Files.findOne({name})

    if(file){
        file.content = content;
        res.status(200).json({
            success: true,
            message: "file updated"
        })
    }else{
       file = await Files.create({
            name, 
            content
            
        });

        res.status(200).json({
            success: true,
            message: file
        })
    }
}

export const getAllFiles = async (req, res) => {
    let files = await Files.find({})

    res.status(200).json({
        success: true,
        message: files
    })
}