
import { Router } from "express";
import { register, login, getUserProfile } from "../controllers/authController.js";
import {protect} from "../middlewares/authMiddleware.js"



const authRouter = Router();

authRouter.post("/register", register);

authRouter.post("/login", login);

authRouter.get("/profile", protect, getUserProfile)


export default authRouter