import express from 'express';
import dotenv from  'dotenv';
import connectDB from './config/Database.js';

dotenv.config();

const app = express();
const  port = process.env.PORT||3500;
app.use(express.json());

connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    })
});