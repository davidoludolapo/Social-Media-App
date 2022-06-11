import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import InfoCard from '../InfoCard/InfoCard'


function ProfileLeft() {
  return (
    <div className='ProfileSide'>
    
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileLeft