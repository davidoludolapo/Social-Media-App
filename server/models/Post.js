import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    desc: String,
    likes: [],
    image: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Posts", PostSchema);