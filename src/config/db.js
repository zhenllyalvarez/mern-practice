import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected to mongoDB");
    } catch (error) {
        console.error("Failed to connect in mongoDB", error);
        process.exit(1); // exit with error
    }
}