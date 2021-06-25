import React, { useEffect, useState } from 'react'
import TextFieldGroup from '../common/TextFieldGroup'
import TextAreaFieldGroup from '../common/TextAreaFeildGroup'
import SelectListGroup from '../common/SelectListGroup'
import InputGroup from '../common/InputGroup'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Spinner from '../common/spinner'
import {createProfile, getCurrentProfile} from '../../actions/profileActions'
import axios from 'axios'
import TextWithIcon from '../common/TextWithIcon'

const EditProfile = () => {
    const dispatch = useDispatch()
    const {isAuthenticated} = useSelector(state => state.auth)
    const {profile, loading} = useSelector(state => state.profile)
    let errors = useSelector(state => state.errors)

    const [handle,setHandle] = React.useState('')
    const [company,setCompany] = React.useState('')
    const [website,setWebsite] = React.useState("")
    const [location,setLocation] = React.useState("")
    const [status,setStatus] = React.useState("")
    const [skills,setSkills] = React.useState("")
    const [github,setgithub] = React.useState("")
    const [bio,setBio] = React.useState("")
    const [twitter,setTwitter] = React.useState("")
    const [facebook,setFacebook] = React.useState("")
    const [linkdin,setLinkedin] = React.useState("")
    const [youtube,setYoutube] = React.useState("")
    const [instagram,setInstagram] = React.useState("")

    

    useEffect(() => {
      async function fetchdata(){
        const res = await axios.get('/api/profile')
        res.data.social?console.log('yes'):res.data.social={}
        setHandle(res.data.handle)
        setCompany(res.data.company)
        setWebsite(res.data.website)
        setLocation(res.data.location)
        setStatus(res.data.status)
        setSkills(res.data.skills.join(','))
        setgithub(res.data.github)
        setBio(res.data.bio)
        setTwitter(res.data.social.twitter)
        setFacebook(res.data.social.facebook)
        setLinkedin(res.data.social.linkdin)
        setInstagram(res.data.social.instagram)
        setYoutube(res.data.social.youtube)
      }
      fetchdata()
    }, [])

    

    const onSubmit = (e) => {
        e.preventDefault()
        const newprofile = {
            handle: handle,
            status:status,
            company:company,
            website:website,
            location:location,
            skills:skills,
            github:github,
            bio:bio,
            twitter:twitter,
            facebook:facebook,
            linkdin:linkdin,
            youtube:youtube,
            instagram:instagram
        }
        console.log(newprofile)
        dispatch(createProfile(newprofile))
        
    }

    const options = [
      {label: "* Select profession", value: 0},
      {label: "Developer", value: "Developer"},
      {label: "Junior Developer", value: "Junior Developer"},
      {label: "Senior Developer", value: "Senior Developer"},
      {label: "Manager", value: "Manager"},
      {label: "Student or Learning", value: "Student or Learning"},
      {label: "Instructor", value: "Instructor"},
      {label: "Intern", value: "Intern"},
      {label: "Other", value: "Other"}
    ]

    if(!isAuthenticated){
        return(<Redirect to="/login" />)
    }else{
      return(
        <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <a href="dashboard.html" className="btn btn-light">
                Go Back
              </a>
              <h1 className="display-4 text-center">Edit Your Profile</h1>
              <small className="d-block pb-3">* = required field</small>
              <form action="add-experience.html" onSubmit={onSubmit}>
                <TextFieldGroup
                  type = "text"
                  errors = {errors.handle}
                  placeholder = "Profile Handle"
                  name = "handle"
                  value = {handle}
                  onChange = {(e)=>{setHandle(e.target.value)}}
                />
                <SelectListGroup
                  errors = {errors.status}
                  placeholder = "Status"
                  name = "status"
                  value = {status}
                  options={options}
                  onChange = {(e)=>{setStatus(e.target.value)}}
                />
                <TextFieldGroup
                  type = "text"
                  errors = {errors.name}
                  placeholder = "Company"
                  name = "company"
                  value = {company}
                  onChange = {(e)=>{setCompany(e.target.value)}}
                />
                <TextFieldGroup
                  type = "text"
                  errors = {errors.name}
                  placeholder = "Website"
                  name = "website"
                  value = {website}
                  onChange = {(e)=>{setWebsite(e.target.value)}}
                />
                <TextFieldGroup
                  type = "text"
                  errors = {errors.name}
                  placeholder = "Location"
                  name = "location"
                  value = {location}
                  onChange = {(e)=>{setLocation(e.target.value)}}
                />
                <TextFieldGroup
                  type = "text"
                  errors = {errors.skills}
                  placeholder = "Skills"
                  name = "skills"
                  value = {skills}
                  onChange = {(e)=>{setSkills(e.target.value)}}
                />
                <TextFieldGroup
                  type = "text"
                  errors = {errors.github}
                  placeholder = "Github username"
                  name = "github"
                  value = {github}
                  onChange = {(e)=>{setgithub(e.target.value)}}
                />
                <small className="form-text text-muted">If you want your latest repos and a Github link, include your username</small>
                <TextAreaFieldGroup
                  errors = {errors.name}
                  placeholder = "A short bio of yourself"
                  name = "bio"
                  value = {bio}
                  onChange = {(e)=>{setBio(e.target.value)}}
                />
                <span className="text-muted">Optional</span>
                <TextWithIcon
                  icon=""
                  type="text"
                  errors={errors.twitter}
                  placeholder="Twitter"
                  name={twitter}
                  value={twitter}
                  onChange={(e) => setTwitter(e.target.value)}
                />
                <TextWithIcon
                  icon=""
                  type="text"
                  errors={errors.facebook}
                  placeholder="Facebook"
                  name={facebook}
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                />
                <TextWithIcon
                  icon=""
                  type="text"
                  errors={errors.linkdin}
                  placeholder="Linkedin"
                  name={linkdin}
                  value={linkdin}
                  onChange={(e) => setLinkedin(e.target.value)}
                />
                <TextWithIcon
                  icon=""
                  type="text"
                  errors={errors.youtube}
                  placeholder="Youtube"
                  name={youtube}
                  value={youtube}
                  onChange={(e) => setYoutube(e.target.value)}
                />
                <TextWithIcon
                  icon=""
                  type="text"
                  errors={errors.instagram}
                  placeholder="Instagram"
                  name={instagram}
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                />
                <input 
                    type="submit" 
                    className="btn btn-info btn-block mt-4"
                     />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
    }
}
export default EditProfile

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const EditProfile = () => {

//   const [handle,setHandle] = React.useState(data.handle)
  
//   return(
//     <h1>TODO::</h1>
//   )
// }

// export default EditProfile