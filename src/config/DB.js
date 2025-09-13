
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


const connectDB = () => {
    const monogoDB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@arundb.rhqzvr2.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=ArunDB`;

          console.log(process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_NAME);

    mongoose
        .connect(monogoDB_URI)
        .then(() => {
            console.log("MongoDB connected successfully");
        })
        .catch((err) => {
            console.log("MongoDB connection error:", err);
            process.exit(1);
        });
}

export default connectDB;