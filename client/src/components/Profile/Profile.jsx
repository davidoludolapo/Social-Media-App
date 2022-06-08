import React from 'react'
import PostSide from '../PostSide/PostSide'
import ProfileCard from '../ProfileCard/ProfileCard'
import ProfileLeft from '../ProfileLeft/ProfileLeft'
import Rightside from '../Rightside/Rightside'
import "./profile.css"

function Profile() {
  return (
    <div className='profile'>
        <ProfileLeft/>

        <div className="profile-center">
            <ProfileCard/>
            <PostSide/>
        </div>
            <Rightside/>
    </div>
  )
}

export default Profile