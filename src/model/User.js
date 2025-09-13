import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    gender :{
    type: String,
    enum: ['Male', 'Female', 'Other'],
    default: 'Other'
    },
    role: {
        type: String,
        enum: ["User", "Admin"],
        default: "User"
    },
    
}, { timestamps: true });


userSchema.pre("save",async function(){
  if(!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(Number(process.env.ENCRYPT_SALT_ROUNDS));
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};



const User = mongoose.model('User', userSchema);

export default User;