import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

export const signup = async(req,res) =>{
    try {
        const {fullname,email,password} = req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message:"Email already exists "})
        }
        const hashPassword = await bcryptjs.hash(password,10)
        const createUser = new User({fullname,email,password:hashPassword});
        await createUser.save();
        res.status(200).json({message:"signup successfully"})
    } catch (error) {
        console.log("data not save",error.message);
        res.status(400).json({message:"data not save"})
    }
}

export const login = async(req,res) =>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Email not exists"}) 
        }
        const isMatch = await bcryptjs.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"invalid password"});
        }
        res.status(200).json({message:"login successfully",user:{
            _id:user._id,
            fullname:user.fullname,
            email:user.email
        }})
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"internal server error"})
    }
}