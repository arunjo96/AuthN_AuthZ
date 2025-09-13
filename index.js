
import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/DB.js";
import errorhandler from "./src/middlewares/errorHandler.js";
import authRouter from "./src/routes/authRoutes.js";


dotenv.config();
connectDB();

const app = express();
app.use(express.json());


app.use("/api/auth", authRouter);



app.use(errorhandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
   
});




