import React from 'react'
import axios from 'axios'

const Experience = (props) => {

    const handleClick = (id) => {
        axios.delete(`/api/profile/experience/${id}`)
        .then(window.location='/dashboard')
    }

    const experience = props.experience.map(exp => {
        return(
            <tr key={exp._id}>
            <td>{exp.company}</td>
            <td>{exp.title}</td>
            <td>{exp.from} - {exp.to}</td>
            <td>
                <button className='btn btn-danger' onClick={() => {
                    handleClick(exp._id)
                }} >Delete</button>
            </td>
        </tr>
        )
    })
    return(
        <div>
            <h4 className="mb-4">Experience</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Title</th>
                        <th>Year</th>
                        <th></th>
                    </tr>
                    {experience}
                </thead>
            </table>
        </div>
    )
}

// const Experience = (props) => {
//     const content = props.experience.map((exp) => {
//         return(
//             <p>{exp._id}</p>
//         )
//     })
//     return(
//         <div>
//             {content}
//         </div>
//     )
// }

export default Experience