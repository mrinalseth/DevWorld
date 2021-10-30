import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getSinglePost} from '../../actions/postActions'
import { useDispatch, useSelector } from 'react-redux'

const DisplayComment = (props) => {
    const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(() => {
        const fetch = async () => {
            dispatch(getSinglePost(id))
        }
        fetch()
    },[])
    const {post, loading} = useSelector(state => state.post)
    return(
        <div>
            {id}
        </div>
    )
}

export default DisplayComment