import React from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'


function Post({data}) {
  return (
    <div className='post'>



        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
        <img src={data.img} alt="" />
        <div className="postReact">
            <img src={data.liked ? Heart: NotLike} alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>
        <span style={{color: "var(--gray)", fontSize: '12px'}}>{data.likes} likes</span>
    </div>
  )
}

export default Post