import mongoose, { Schema } from "mongoose";

const trashFileSchema = mongoose.Schema({
    filename: {
        type: String,
        unique: true
    },

    filecontent: {
        type: String
    }, 

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }
}, {timestamp: true})


export const Trash = mongoose.model("trash", trashFileSchema)