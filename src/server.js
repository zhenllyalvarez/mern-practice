import express from 'express';
import route from './routes/route.js';
import { connectDB } from './config/db.js';
import dotenv from "dotenv";


dotenv.config();
const app = express();
const port = process.env.PORT || 5001;

app.use('/', route);
connectDB();

app.listen(port, () => {
    console.log(`Successfully running in port ${port}`);
});