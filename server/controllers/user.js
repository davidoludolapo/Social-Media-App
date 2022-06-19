import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    let users = await User.find()
    users = users.map((user)=>{
      const {password, ...otherDetails} = user._doc
      return otherDetails
    })
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json(error)
    
  }
}

// Get a user
export const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    if (user) {
      const { password, ...otherDetails } = user._doc;
      res.status(200).json(otherDetails);
    } else {
      res.status(404).json("User does not exist");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update user details
export const updateUser = async (req, res) => {
  const id = req.params.id;
  console.log("Data Received", req.body)
  
  const { _id, password } = req.body;
  
  if (id === _id ) {
    try {
 
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }
    
      const user = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      const token = jwt.sign(
        { username: user.username, id: user._id },
        process.env.JWT_KEY,
        { expiresIn: "1h" }
      );
     
      res.status(200).json({user, token});
    
    } catch (error) {
   
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Access Denied! You can only update your own profile")
  }
};



// Delete User
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus } = req.body;

  if (currentUserId === id || currentUserAdminStatus) {
    try {
      await User.findByIdAndDelete(id);
      res.status(200).json("User deleted successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Access denied, You can only delete your own profile");
  }
};

// Follow a user

export const followUser = async (req, res) => {
  const id = req.params.id;

  const { _id } = req.body;

  if (_id === id) {
    res.status(403).json("Action forbidden");
  } else {
    try {
      const followUser = await User.findById(id);
      const followingUser = await User.findById(_id);

      if (!followUser.followers.includes(_id)) {
        await followUser.updateOne({ $push: { followers: _id } });
        await followingUser.updateOne({ $push: { following: id } });
        res.status(200).json("User followed!");
      } else {
        res.status(403).json("You are following this user already!");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
// Unfollow a user

export const unFollowUser = async (req, res) => {
  const id = req.params.id;

  const { _id } = req.body;

  if (_id === id) {
    res.status(403).json("Action forbidden");
  } else {
    try {
      const followUser = await User.findById(id);
      const followingUser = await User.findById(_id);

      if (followUser.followers.includes(_id)) {
        await followUser.updateOne({ $pull: { followers: _id } });
        await followingUser.updateOne({ $pull: { following: id } });
        res.status(200).json("User Unfollowed!");
      } else {
        res.status(403).json("You are not following each other");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
