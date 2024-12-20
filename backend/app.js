import express from "express";
import connectDB from "./database/db.js";
import router from "./routes/user.js";
import routerFiles from "./routes/file.js"
import cors from "cors"
import cookieParser from "cookie-parser";
import { config } from "dotenv";

const app = express();
app.use(cookieParser());
config({
  path: "./config/config.env"
});
// Enable CORS for specific frontend URL
app.use(cors({
  origin: 'https://productivity-web-app-frontend.vercel.app', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));
  
connectDB();
app.use(express.json());
app.use(router);
app.use(routerFiles);

app.get('/', (req, res)=>{
  return res.json({
    success: true,
    message: "server is up and running "
  })
})


app.listen(3000, ()=> {
    console.log("server is running on port 3000")
})