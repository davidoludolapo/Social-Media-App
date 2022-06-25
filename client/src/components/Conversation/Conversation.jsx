import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getUser } from "../../api/UserRequest";
import Divider from "@mui/material/Divider";

function Conversation({ data, currentUserId, online }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userId = data.members.find((id) => id !== currentUserId);
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);

  return (
    <>
      <div className="follower conversation">
        <div>
          {online && <div className="online-dot"></div>}
          <img
            src={
              userData?.profilePicture
                ? process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture
                : process.env.REACT_APP_PUBLIC_FOLDER + "defaultProfile.png"
            }
            alt=""
            className="followerImage"
            style={{ width: "50px", height: "50px",  borderRadius: "50%" }}
          />
          <div className="name" style={{ fontSize: "0.8rem" }}>
            <span style={{ marginBottom: 5 }}>
              {userData?.firstname} {userData?.lastname}
            </span>
            <span>{online ? "Online" : "Offline"}</span>
          </div>
        </div>
      </div>
      <Divider
        style={{ width: "100%", maxWidth: 360, backgroundColor: "#40514E", marginTop: "10px" }}
      />
      {/* <hr style={{ width: "85%", border: "0.1px solid #333" }} /> */}
    </>
  );
}

export default Conversation;
