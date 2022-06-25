import { CircularProgress } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getTimelinePosts } from '../../actions/postAction'
// import { PostsData } from '../../Data/PostsData'
import Post from '../Post/Post'
import "./posts.css"


function Posts() {
  const dispatch = useDispatch()
  const { user} = useSelector((state)=> state.authReducer.authData)
  let { posts, loading } = useSelector((state) => state.postReducer);
  const params = useParams()

  useEffect(() => {
   dispatch(getTimelinePosts(user._id))
  }, [])
  
  if (!posts ) return "no posts" 
  if(params.id) posts = posts.filter((post)=>post.userId === params.id)
  return (
    <div className='posts'>
        {loading ? <CircularProgress style={{color: "#1D9BF0", alignItems:"center", justifyContent:"center"}}/> :
          posts.map((post, id)=>{
            return <Post data={post} id={id}/>
        })}
    </div>
  )
}

export default Posts