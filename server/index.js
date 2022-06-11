import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import userRoute from './routes/user.js'
import postRoute from './routes/post.js'
const app = express()
dotenv.config()


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

app.use("/auth", authRoute)
app.use("/user", userRoute)
app.use("/post", postRoute)



app.listen(process.env.PORT, ()=>{
    connect()
    console.log("Connected to backend");
})