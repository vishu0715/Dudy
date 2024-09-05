import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";
export const signup =async(req, res) => {
    try{
       const {name, username , password, confirmPassword, gender}  = req.body;
       if(password !== confirmPassword){
           return res.status(400).json({message:"Incorrect Password"});
       }
       const user = await User.findOne({username});
       if(user){
           return res.status(400).json({message:"User already exists"});
       }
       
       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(password, salt);
       const boyPic = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
       const girlPic = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

       const newUser = new User({
           name, 
           username, 
           password: hashedPassword, 
           gender, 
           profilePic:gender === "male" ? boyPic : girlPic });

           if(newUser){
           generateTokenAndSetCookie(newUser._id, res);
           await newUser.save();
           res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            username: newUser.username,
            profilePic: newUser.profilePic});
    }else{
        res.status(400).json({message:"Invalid user data"});
    }
}catch(error){
        console.log({error:error.message});
        res.status(500).json({message:error.message});
    }
};

export const login = async(req,res) => {
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isCorrectPassword = await bcrypt.compare(password, user?.password || "");
        if(!user || !isCorrectPassword){ 
            return res.status(401).json({message:"Invalid credentials"});   
        }
        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            _id: user._id,
            name: user.name,
            username: user.username,
            profilePic: user.profilePic});
    }
    catch(error){
         console.log({error:error.message});
         res.status(500).json({message:error.message});
    }
};

export const logout = (req,res) => {
   try{
     res.cookie("jwt","",{maxAge:0});
     res.status(200).json({message:"Logged out successfully"});
   }
   catch(error){
    console.log({error:error.message});
    res.status(500).json({message:error.message});
   }
};