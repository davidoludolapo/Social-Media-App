import Post from "../models/Post.js";
import mongoose from "mongoose";
import User from "../models/User.js";

// Create new post
export const createPost = async (req, res) => {
  const newPost = new Post(req.body);

  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get a post

export const getPost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await Posts.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a post

export const updatePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;

  try {
    const post = await Post.findById(postId);
    if (post.userId === userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post Updated");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete a post

export const deletePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;
  try {
    const post = await Post.findById(id);
    if (post.userId === userId) {
      await post.deleteOne();
      res.status(200).json("Post deleted successfully");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Like/dislike post

export const likePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;
  try {
    const post = await Post.findById(id);
    if (post.likes.includes(userId)) {
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json("Post disliked");
    } else {
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json("Post liked");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};


// Get all posts

export const getTimelinePosts = async (req, res) => {
  const userId = req.params.id;

  try {
    const currenUserPosts = await Post.find({ userId: userId });
    const followingPosts = await User.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts",
        },
      },
      {
        $project: {
          followingPosts: 1,
          _id: 0,
        },
      },
    ]);
    res.status(200).json(
      currenUserPosts
        .concat(...followingPosts[0].followingPosts)
        .sort((a, b) => {
          return b.createdAt - a.createdAt;
        })
    );
  } catch (error) {
    res.status(200).json(error);
  }
};
