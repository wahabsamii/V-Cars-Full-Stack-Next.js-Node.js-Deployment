import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import {v2 as cloudinary} from 'cloudinary';

export const register = async(req,res) => {
    const {name, email, password, About} = req.body;
    try {
        const existing = await User.findOne({email});
        if (existing) {
            return res.json({success: false, message: "email already register"});
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            email,
            password: hashPassword,
            About
        });
        await user.save();

        return res.json({success: true, message: 'Account Created'});
    } catch (error) {
        return res.json({success: false, error});
    }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, 'jwtSecret', { expiresIn: '7d' });
    
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // const { password: _, ...userWithoutPassword } = user._doc;
    return res.status(200).json({ success: true,message: 'login successfully', user, token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
export const logout = (req,res) => {
    res.clearCookies();
};

export const myInfo = async (req, res) => {
  try {
    const {id} = req.params;
    const userDetails = await User.findOne({_id: id}).select('-password');
    if (!userDetails) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({
      success: true,
      userDetails
    });

  } catch (error) {
    console.error('Error fetching user info:', error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};

export const updateUser = async(req,res) => {
    const {id} = req.params;
    const {name,email, password, About} = req.body;
    const profile = req.file; 
    try {
       if(profile){
        const imageUpload = cloudinary.uploader.upload(profile.path, {resource_type:'image'});
        const imageUrl = (await imageUpload).secure_url;

        await User.findByIdAndUpdate(id, {profile: imageUrl}, {new: true});
      }
        const update = await User.findByIdAndUpdate(id, {name, email, password, About}, {new: true});
        if (update) {
            return res.json({success: true, message: 'Profile Updated'})
        }
    } catch (error) {
        console.log(error);
    }
}

export const getAllUsers = async(req,res) => {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (error) {
      console.log(error)
    }
}

export const DELETEUSSER = async(req,res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if(!user) return res.status(404).josn("user not found");
    res.json({message: "User Delete Successfully"});
  } catch (error) {
    console.log(error); 
  }
}

//recent Users
export const recentUsers = async(req,res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 }).limit(3);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recent users" });
  }
}