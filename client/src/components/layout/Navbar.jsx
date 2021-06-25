import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch ,useSelector} from 'react-redux'
import {logUserOut} from '../../actions/authActions'
function Navbar(){

  const {isAuthenticated,user} = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const style = {
    width: '25px',
    marginRight: '5px'
  }
  const authLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard">Dashboard</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/post">Posts</Link>
      </li>
      <li className="nav-item">
        <img src={user.avatar} style={style} alt=""/>
      </li>
    <a className="nav-link" href="#" onClick = {() => {
      dispatch(logUserOut())
    }}>Logout</a>
  </ul>
  )  
  const guestLinks = (
    <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/register">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
  )
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">DevConnector</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/profiles"> Developers
                </Link>
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks }
            
          </div>
        </div>
      </nav>
    )
}
export default Navbar;