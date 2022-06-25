import React from "react";
import "./Post.css";
import Comment from "../../img/comment.svg";
import Share from "../../img/share.svg";
import Heart from "../../img/like2.svg";
import NotLike from "../../img/like1.svg";
import { useSelector } from "react-redux";
import { useState } from "react";
import { likePost } from "../../api/postRequest";
import { format } from "timeago.js";

function Post({ data }) {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length)

    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
  };
  return (
    <div className="post">
        <div className="profilepic">
        <img
        src={
          user.profilePicture
            ? serverPublic + user.profilePicture
            : serverPublic + "jose.jpg"
        }
        alt=""
      />
        </div>
        <div className="detail">
        <span>
          <b>{user.username}</b>
        </span>
        <span> {data.desc}</span>
      </div>
        <small style={{color:"#6F7D8A"}}>{format(data.createdAt)}</small>
      <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="" />
      <div className="postReact">
        <img src={liked ? Heart : NotLike} alt="" style={{cursor: "pointer"}} onClick={handleLike}/>
      
        <img src={Comment} alt="" />
    
        <img src={Share} alt="" />
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>
    </div>
  );
}

export default Post;
