import express from "express";
import connectDB from "./database/db.js";
const app = express();

connectDB();

app.get('/', (req,res)=> {
    res.send("home page api is working")
})

app.listen(3000, ()=> {
    console.log("server is running on port 3000")
})