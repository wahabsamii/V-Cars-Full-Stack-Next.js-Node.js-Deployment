import mongoose from "mongoose";

const dbConnect = async() => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        if(connect){
            console.log('DATABASE CONNECTED');
        }
    } catch (error) {
        console.log(error);
    }
}

export default dbConnect;