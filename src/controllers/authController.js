import User from "../model/User.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { name, email, password, gender, role } = req.body;
        const user = await User.findOne({ email });
        if (user) {
             res.status(400).json({
                message: "User already exists with this email",
                status: "error",
            });
        }

        const newUser = new User({
            name,
            email,
            password,
            gender,
            role
        });
        await newUser.save();
        res.status(201).json({
            message: "User registered successfully",
            status: "success",
            data: newUser
        });
            
    }
    catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
}

export const login = async (req, res) => { 
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
             res.status(404).json({
                status: error,
                message: "User does not exist with this email  ",
                data: {
                    email,
                }
            })
        }
          const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({
        status: "error",
        message: "Invalid Password",
      });
    }

        const token = jwt.sign({
            id: user._id,
            role: user.role
        }, process.env.JWT_AUTH_SECRET_KEY);


        res.status(200).json({
            status: "success",
            message: "User logged in sucessfully",
            data: { token }
        })

    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error.message
        });
        
    }
}


export const getUserProfile = async (req, res) => {
    try {
      res.status(200).json({
        status: "success",
        message: "This is protected route",
        data: {
            info: "Some protected information",
            requestedBy : req.user  
        },
    });
    }
    catch (err) {
        res.status(500).json({
          status : "error",
          message: err.message
      });
    }
};