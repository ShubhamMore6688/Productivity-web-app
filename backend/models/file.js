import mongoose, { Schema } from "mongoose";

const fileSchema = mongoose.Schema({
    name: {
        type: String,
    },

    content: {
        type: String
    }, 

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }
}, {timestamp: true})


export const Files = mongoose.model("file", fileSchema)