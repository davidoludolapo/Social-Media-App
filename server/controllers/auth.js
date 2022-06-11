import User from "../models/User.js";
import bcrypt from 'bcrypt'

// Register

export const register = async (req, res)=>{

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(req.body.password, salt)
     try {
         const newUser = new User({
             username:req.body.username,
             firstname:req.body.firstname,
             lastname:req.body.lastname,
             password:hash,
         })

         await newUser.save()
         res.status(200).json(newUser)
     } catch (error) {
         res.status(500).json({message: error.message})
     }
}

// Login 
export const login = async (req, res)=>{
    const {username, password} = req.body

    try {
        const user = await User.findOne({username: username})

        if (user) {
            const validity = await bcrypt.compare(password, user.password)

            validity ? res.status(200).json(user) :  res.status(400).json("Wrong Password")
        } else{
            res.status(404).json("User does not exist")
        }
    } catch (error) {
        es.status(500).json({message: error.message})
    }
}