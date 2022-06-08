import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import Rightside from '../../components/Rightside/Rightside'
import "./home.css"

function Home() {
  return (
    <div className="home">
        <ProfileSide/>
        <PostSide/>
        <Rightside/>
    </div>
  )
}

export default Home