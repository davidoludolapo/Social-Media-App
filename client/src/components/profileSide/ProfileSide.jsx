
   
import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'

import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'

import "./profileSide.css"
const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      
        <ProfileCard location="homepage"/>
        <FollowersCard/>
    
    </div>
  )
}

export default ProfileSide