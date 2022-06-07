import React from "react";
import { Followers } from "../../Data/FollowersData";
import "./followersCard.css";

function FollowersCard() {
  return (
    <div className="followersCard">
      <h3>Your Followers</h3>

      {Followers.map((follower, id) => {
        return (
          <div className="follower">
            <div>
              <img src={follower.img} className="followerImg" alt="" />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className="button fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
}

export default FollowersCard;
