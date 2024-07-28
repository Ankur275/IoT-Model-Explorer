import express from 'express';
import dotenv from  'dotenv';
import connectDB from './config/Database.js';
import usersRouter from './Routes/userRoute.js';
import cors from 'cors';
import cookieParser from "cookie-parser"

dotenv.config();

const app = express();
const  port = process.env.PORT||3500;

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

const corsOptions = {
    origin: process.env.CORS_ORIGIN, 
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use('/api/users',usersRouter)

connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running on  http://localhost:${port}`);
    })
});