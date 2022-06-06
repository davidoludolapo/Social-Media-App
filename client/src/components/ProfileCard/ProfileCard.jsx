import React from 'react'
import "./profilecard.css"
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'

function ProfileCard() {
  return (
    <div className='profileCard'>
        <div className="profileImages">
            <img src={Cover} alt="" />
            <img src={Profile} alt="" />
        </div>
    </div>
  )
}

export default ProfileCard