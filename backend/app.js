import express from 'express';
import dotenv from  'dotenv';
import connectDB from './config/Database.js';
import usersRouter from './Routes/userRoute.js'

dotenv.config();

const app = express();
const  port = process.env.PORT||3500;
app.use(express.json());

app.use('/api/users',usersRouter)

connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running on  http://localhost:${port}`);
    })
});