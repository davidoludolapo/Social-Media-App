import React from "react";

import ProfileLeft from "../ProfileLeft/ProfileLeft";
import Rightside from "../Rightside/Rightside";
import "./profile.css";
import ProfileCard from "../ProfileCard/ProfileCard";
import PostSide from "../PostSide/PostSide";

function Profile() {
  return (
    <div className="profile">
      <ProfileLeft />

      <div className="profile-center">
        <ProfileCard  location = "profilePage"/>
        <PostSide />
      </div>
      <Rightside />
    </div>
  );
}

export default Profile;
