import React from "react";

import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="../home">
        <HomeIcon style={{ color: "white" }} />
      </Link>

      <Link to="../chat">
        <Badge badgeContent={7} color="primary">
          <MailIcon color="action" style={{ color: "white" }} />
        </Badge>
      </Link>

      <Badge badgeContent={4} color="primary">
        <NotificationsIcon color="action" style={{ color: "white" }} />
      </Badge>
    </div>
  );
};

export default NavIcons;
