import React, { useEffect, useState } from 'react'
import {getCurrentProfile, deleteAccount} from '../../actions/profileActions'
import {useDispatch, useSelector} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import Spinner from '../common/spinner'
import ProfileActions from './ProfileActions'
import axios from 'axios'
import Experience from './Experience'
import Education from './Education'

function Dashboard()
{ 
    let dashboardContent;
    const dispatch = useDispatch();
    const [id, setId] = useState('')
    const {isAuthenticated, user} = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(getCurrentProfile())
    }, [])

    const {profile, loading} = useSelector(state=>state.profile)
    const [_profile, setProfile] = useState('')
    const [experience, setExperience] = useState([])
    const [education, setEducation] = useState([])

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = () => {
        axios.get("api/profile")
        .then(res => {
            setProfile(res.data)
            setExperience(res.data.experience)
            setEducation(res.data.education)
        })
    }

    const onDelete = (e) => {
        dispatch(deleteAccount())
    }

    if(!isAuthenticated){
        return(<Redirect to="/login" />)

    }else{
        if(profile === null || loading){
            dashboardContent = <h4><Spinner/></h4>
        }else{
            if(Object.keys(profile).length>0){
                dashboardContent = <div>
                    <p className="lead text-muted">Welcome 
                        <Link to={`/profile/${profile.handle}`}>{" "+user.name}</Link>
                    </p>
                    <ProfileActions/>
                    {/* TODO exp and Edu */}
                    <Experience
                        experience={experience}
                    />
                    <Education
                        education = {education}
                    />
                    <div style={{marginBottom: '60px'}}/>
                    <button className="btn-danger" onClick={onDelete}>
                        Delete Account
                    </button>
                </div>
            }else{
                dashboardContent = <div>
                    <p className="lead text-muted">Welcome {user.name}</p>
                    <p>Please setup a profile</p>
                    <Link to="/create-profile" >Add Profile</Link>
                </div>
            }
        }
    }


    return(
        <div className="dashboard">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4">Dashboard</h1>
                        {dashboardContent}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;  