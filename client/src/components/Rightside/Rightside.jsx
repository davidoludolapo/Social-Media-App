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

function Rightside() {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="rightSide">
    <div className="icons">

     <div className="navIcons">
     <Link to = '../home'>

     <img src={Home} alt="" />
     </Link>
     </div>
     <div className="navIcons">
     <UilSetting />
     </div>
     <div className="navIcons">
     <img src={Noti} alt="" />
     </div>
     <div className="navIcons">
     <Link to ='/chat'>
     <img src={Comment} alt="" />

     </Link>
     </div>
      <LogoSearch/>
    </div>

      <Trendcard />

      <button className="button r-button" onClick={() => setModalOpened(true)}>
       <HiOutlinePencilAlt size={30}/>
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
}

export default Rightside;
