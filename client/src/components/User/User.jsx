import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { followUser, unFollowUser } from '../../actions/UserAction.';

function User({person}) {
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.authReducer.authData);
    const [following, setFollowing] = useState(person.followers.includes(user._id))

    const handleFollow = ()=>{
        following ?
        dispatch(unFollowUser(person._id, user)) :
        dispatch(followUser(person._id, user))
        
        setFollowing((prev) => !prev);

    }

  return (
    <div className="follower">
    <div>
      <img src={person.profilePicture ? serverPublic + person.profilePicture : serverPublic + "jose.jpg"} className="followerImg" alt="" />
      <div className="name">
        <span>{person.firstname} {person.lastname}</span>
        <span>@{person.username}</span>
      </div>
    </div>
    <button className={following ? "button fc-button UnfollowButton" : "button fc-button" } onClick={handleFollow}>{following ? "Unfollow" : "Follow"}</button>
  </div>
  )
  }
export default User