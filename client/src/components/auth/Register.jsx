import React from 'react'
import classnames from 'classnames'
import {useDispatch, useSelector} from 'react-redux'
import {registerUser} from '../../actions/authActions'
import TextFieldGroup from '../common/TextFieldGroup'
import { Redirect } from 'react-router'

function Register(){
  const dispatch = useDispatch()
  const [name,setName] = React.useState("")
  const [email,setEmail] = React.useState('')
  const [password,setPassword] = React.useState('')
  const [password2,setPassword2] = React.useState('')
  // var [errors, setErrors] = React.useState({
  //   email:'',
  //   name:'',
  //   password:'',
  //   password2:''
  // })
  const selectErrors = useSelector(state=>state.errors)
  var errors = selectErrors
 
  function onChangeName(event) {
    setName(event.target.value);
  }
  function onChangeEmail(event) {
    setEmail(event.target.value);
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
  }
  function onChangePassword2(event) {
    setPassword2(event.target.value);
  }
  function onSubmit(event){
    event.preventDefault();
    const newUser = {
      name:name,
      email:email,
      password:password,
      password2:password2
    }
    dispatch(registerUser(newUser))
    Redirect('/')
  }
  return(
        <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your DevConnector account</p>
              <form noValidate onSubmit={onSubmit}>
                <TextFieldGroup
                  type = "text"
                  errors = {errors.name}
                  placeholder = "Username"
                  name = "username"
                  value = {name}
                  onChange = {onChangeName}
                />
                <TextFieldGroup
                  type = "email"
                  errors = {errors.email}
                  placeholder = "Email"
                  name = "Email"
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
                <TextFieldGroup
                  type = "password"
                  errors = {errors.password2}
                  placeholder = "Confirm Password"
                  name = "password2"
                  value = {password2}
                  onChange = {onChangePassword2}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Register;