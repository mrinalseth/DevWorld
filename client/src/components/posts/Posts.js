import React, { useEffect } from 'react'
import PostForm from './PostForm'
import Spinner from '../common/spinner'
import {useDispatch, useSelector} from 'react-redux'
import { Redirect } from 'react-router'
import {getPost} from '../../actions/postActions'
import PostFeed from './PostFeed'

const Posts = () => {
    
    const {isAuthenticated} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPost())
    },[])
    const {posts, loading} = useSelector(state => state.post)

    if(!isAuthenticated){
        return(<Redirect to="/login" />)
    }

    let postContent


    if(posts === null || loading){
        postContent = <Spinner/>
    }else{
        postContent = <PostFeed posts = {posts} />
    }

    return (
        <div className="feed">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <PostForm/>
                        {postContent}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts