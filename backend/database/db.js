import mongoose from "mongoose";

const connectDB = () => mongoose.connect('mongodb://127.0.0.1:27017', {dbName: "productivity-web-app"}).then(()=>{
    console.log("database is connected successfully");
})


export default connectDB;