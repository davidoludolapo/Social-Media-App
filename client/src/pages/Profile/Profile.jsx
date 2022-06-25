import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import Rightside from "../../components/Rightside/Rightside";
import Topbar from "../../components/TopBar/TopBar";


import "./profile.css";


function Profile() {
  return (
    <>

    <Topbar/>
    <div className="profile">
      <ProfileLeft />

      <div className="profile-center">
        <ProfileCard  location = "profilePage"/>
        <PostSide />
      </div>
      <Rightside />
    </div>
    </>
  );
}

export default Profile;
