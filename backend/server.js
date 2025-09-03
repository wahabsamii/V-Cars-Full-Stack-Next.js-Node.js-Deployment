import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/authRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import dbConnect from "./config/db.js";
import cookieParser from "cookie-parser";
import connectCloudinary from "./config/cloudinary.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
const port  = 5000;
app.use(cors({
    origin: 'http://localhost:3000',
    credentials:true
}));

dbConnect();
connectCloudinary();
app.get('/', (req,res) => {
    res.send("RUNNING BACKEND OF VCARS")
})
app.use('/api/user', userRoutes);
app.use('/api/booking', bookingRoutes);
// app.listen(port, () => {
//     console.log("server is runnig on", port);
// });

export default app;