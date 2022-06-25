import React from "react";
import "./rightside.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { UilWrite } from "@iconscout/react-unicons";
import Trendcard from "../TrendCard/Trendcard";
import { useState } from "react";
import ShareModal from "../ShareModal/ShareModal";
import { HiOutlinePencilAlt } from "react-icons/hi";
import LogoSearch from "../LogoSearch/LogoSearch";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";

function Rightside() {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="rightSide">
   

      <Trendcard />

      <button className="button r-button" onClick={() => setModalOpened(true)}>
       <HiOutlinePencilAlt size={30} style={{color:"#1D9BF0"}}/>
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
}

export default Rightside;
