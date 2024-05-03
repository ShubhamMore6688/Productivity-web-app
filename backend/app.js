import express from "express";
import connectDB from "./database/db.js";
import router from "./routes/user.js";
import routerFiles from "./routes/file.js"
import cors from "cors"
const app = express();

connectDB();
app.use(express.json());
app.use(cors());
app.use(router);
app.use(routerFiles);


app.listen(3000, ()=> {
    console.log("server is running on port 3000")
})