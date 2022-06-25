import React from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications, Home, Timeline, KeyboardCapslock } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Topbar() {
    const { user} = useSelector((state)=> state.authReducer.authData)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Verscial</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
       
        <div className="topbarIcons">
         
          
          <div className="topbarIconItem">
          <Link to="/chat">

            <Chat style={{ color: "white" }}/>
          </Link>
            <span className="topbarIconBadge"></span>
          </div>

         
          
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
            <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? serverPublic + user.profilePicture
                : serverPublic + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
          
        </Link>
        </div>
        
      </div>
    </div>
  );
}

export default Topbar;
