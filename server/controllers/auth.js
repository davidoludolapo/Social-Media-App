import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register

export const register = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);
  req.body.password = hash;
  const newUser = new User(req.body);
  const { username } = req.body;
  try {
    const oldUser = await User.findOne({ username });

    if (oldUser) {
      return res.status(400).json({ message: "username already exists" });
    }

    const user = await newUser.save();

    const token = jwt.sign({
      username: user.username,
      id: user._id,
    }, process.env.JWT_KEY, {expiresIn: '1h'});
    res.status(200).json({user, token});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login
export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username: username });

    if (user) {
      const validity = await bcrypt.compare(password, user.password);

      if(!validity){
          res.status(400).json("Wrong password")
      }
      else{
        const token = jwt.sign({
            username: user.username,
            id: user._id,
          }, process.env.JWT_KEY, {expiresIn: '1h'});
          res.status(200).json({user, token})
      }
    } else {
      res.status(404).json("User does not exist");
    }
  } catch (error) {
    es.status(500).json({ message: error.message });
  }
};
