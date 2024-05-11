import mongoose, { Schema } from "mongoose";

const fileSchema = mongoose.Schema({
    filename: {
        type: String,
        unique: true
    },

    filecontent: {
        type: String
    }, 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },


    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }
}, {timestamp: true})


export const Files = mongoose.model("file", fileSchema)