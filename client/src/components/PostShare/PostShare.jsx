import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./postshare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { HiPencilAlt } from "react-icons/hi";
import { useSelector } from "react-redux";
import axios from "axios";
import { uploadImage, uploadPost } from "../../actions/uploadAction";
import { useDispatch } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
// import { uploadPost } from "../../api/UploadRequest";

const PostShare = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.authReducer.authData);
  const loading = useSelector((state)=>state.postReducer.uploading)
  const [image, setImage] = useState(null);
  const desc = useRef();
  
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
  
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };
  const imageRef = useRef();
  
  const reset = () => {
    setImage(null);
    desc.current.value = null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
   
    };
    
  
   if (image) {
     const data = new FormData()
     const filename = Date.now() + image.name
     data.append("name", filename)
     data.append("file", image)
     newPost.image = filename
     console.log(newPost);
     try {
       dispatch(uploadImage(data))

     } catch (error) {
       console.log(error);
     }
   }

   dispatch(uploadPost(newPost));
   reset()

   
  }

    

  return (  
    <div className="postShare">
      <img src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "jose.jpg" } alt="" />
      <div>
        <input ref={desc} required type="text" placeholder="What's happening" />
        <div className="postOptions">
          <div 
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <div style={{ marginRight: "10px" }}>
              <UilScenery />
            </div>
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--schedule)" }}>
            <UilSchedule />
            Shedule
          </div>
          <button className="button ps-button" onClick={handleSubmit} disabled={loading}>
         {loading ? <CircularProgress size={10} style={{color: "green"}}/> :<HiPencilAlt style={{color:"#1D9BF0"}}/>}
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
