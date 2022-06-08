import React from 'react'
import { PostsData } from '../../Data/PostsData'
import Post from '../Post/Post'
import "./posts.css"

function Posts() {
  return (
    <div className='posts'>
        {PostsData.map((post, id)=>{
            return <Post data={post} id={id}/>
        })}
    </div>
  )
}

export default Posts