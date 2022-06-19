import express from "express"
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import userRoute from './routes/user.js'
import postRoute from './routes/post.js'
import UploadRoute from './routes/UploadRoute.js'
import MessageRoute from './routes/message.js'

import ChatRoute from './routes/chat.js'


const app = express()
dotenv.config()

// To serve images for public
app.use(express.static('public'))
app.use('/images', express.static("images"))


const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoDb");
    } catch (error) {
      throw error;
    }
  };

//   Middleware
app.use(express.json());
app.use(cors())

app.use("/auth", authRoute)
app.use("/user", userRoute)
app.use("/post", postRoute)
app.use("/upload", UploadRoute)
app.use("/chat", ChatRoute)
app.use('/message', MessageRoute)



app.listen(process.env.PORT, ()=>{
    connect()
    console.log("Connected to backend");
})