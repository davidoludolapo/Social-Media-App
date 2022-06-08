import React from "react";
import "./infocard.css";
import { UilPen } from "@iconscout/react-unicons";
import { useState } from "react";
import ProfileModal from '../ProfileModal/ProfileModal'

function InfoCard() {

  const [modalOpened, setModalOpened] = useState(false)
  return (
    <div className="infoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen width="2rem" height="1.2rem" onClick={()=>setModalOpened(true)}/>
          <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>In relationship</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Durban</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>SQI</span>
      </div>
      <button className="button logout-btn">Logout</button>
    </div>
  );
}

export default InfoCard;
