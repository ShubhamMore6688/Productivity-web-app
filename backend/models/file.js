import mongoose, { Schema } from "mongoose";

const fileSchema = mongoose.Schema({
    filename: {
        type: String,
    },

    filecontent: {
        type: String
    }, 

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }
}, {timestamp: true})


export const Files = mongoose.model("file", fileSchema)