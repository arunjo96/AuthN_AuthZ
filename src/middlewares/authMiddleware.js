import jwt from "jsonwebtoken";
import User from "../model/User.js";


export const protect = async (req, res, next) => {
    const authString = req.headers.authorization;
    if (!authString || !authString.startsWith("Bearer ")) {
        return res.status(401).json({
            status: "Error",
            message: "Invalid Token"
        });
    }

    const token = authString.split(" ")[1];
    try {
        const {id} = jwt.verify(token, process.env.JWT_AUTH_SECRET_KEY);
        console.log("Verifying with:", process.env.JWT_AUTH_SECRET_KEY);
        const user = await User.findById(id).select("-password");
        if (!user) {
                return res.status(404).json({
                status: "error",
                message: "User not found"
            });
        }
        req.user = user; 
        next();
    } catch (err) {
        return res.status(401).json({
            status: "Error",
            message: "Token is invalid or expired"
        });
    }
};