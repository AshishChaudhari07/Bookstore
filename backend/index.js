import express from 'express';
import  dotenv  from 'dotenv';
import dbConnection from './config/db.js';
import bookRoute from './route/book.route.js';
import userRoute from './route/user.router.js';
import { router } from './route/content.router.js';
import cors from 'cors'

const app = express()
app.use(express.json())

dotenv.config()
dbConnection();
app.use(cors());
const PORT = process.env.PORT || 4000;

// Route
app.use("/book",bookRoute);
app.use('/user',userRoute);
app.use('/authContent',router);

app.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`);
})