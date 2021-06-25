import React, { Component, useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loginUser} from '../../actions/authActions'
import classnames from 'classnames'
import TextFieldGroup from '../common/TextFieldGroup'

function Login(){

  const {isAuthenticated, user} = useSelector(state => state.auth)

  const [email,setEmail] = React.useState('')
  const [password,setPassword] = React.useState('')
  var [errors, setErrors] = React.useState({
    email:'',
    password:''
  })

  function onChangeEmail(event){
    setEmail(event.target.value)
  }
  function onChangePassword(event){
    setPassword(event.target.value)
  }
  const dispatch = useDispatch()
  const selectErrors = useSelector(state=>state.errors)
  errors = selectErrors

  function onSubmit(event){
    event.preventDefault();
    const newUser = {
      email:email,
      password:password
    }
    dispatch(loginUser(newUser))
  }

  return(
    <div className="login">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Log In</h1>
          <p className="lead text-center">Sign in to your DevConnector account</p>
          <form noValidate onSubmit={onSubmit}>
            <TextFieldGroup
              type = "email"
              errors = {errors.email}
              placeholder = "Email Address"
              name = "email"
              value = {email}
              onChange = {onChangeEmail}
            />
            <TextFieldGroup
              type = "password"
              errors = {errors.password}
              placeholder = "Password"
              name = "password"
              value = {password}
              onChange = {onChangePassword}
            />
            <input 
            type="submit" 
            className="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
)

}

export default Login;