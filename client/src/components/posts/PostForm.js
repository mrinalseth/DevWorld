import React, { useState } from 'react'
import TextAreaFieldGroup from '../common/TextAreaFeildGroup'
import {addPost} from '../../actions/postActions'
import {useSelector, useDispatch} from 'react-redux'
import {getPost} from '../../actions/postActions'


const PostForm = () => {

    const [text, setText] = useState('')
    let errors = useSelector(state => state.errors)
    const {user:{name,avatar}} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const onSubmit = (e) => {
        e.preventDefault()
        const newpost = {
            text,
            name,
            avatar
        }
        dispatch(addPost(newpost))
        dispatch(getPost())
        setText('')
        errors.text = null
    }
    return (
        <div className="post-form mb-3">
            <div className="card card-info">
              <div className="card-header bg-info text-white">
                Say Somthing...
              </div>
              <div className="card-body">
                <form onSubmit ={onSubmit}>
                  <div className="form-group">
                    <TextAreaFieldGroup
                        placeholder="Create a post"
                        name={text}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        errors ={errors.text}
                    />
                  </div>
                  <button type="submit" className="btn btn-dark">Submit</button>
                </form>
              </div>
            </div>
          </div>
    )
}

export default PostForm