import {useNavigate, useParams} from 'react-router-dom'
// To do add the projects here

function Projects() {
    let navigate = useNavigate();
    // let { username } = useParams();

    const func = () => {
        navigate("/projects")
    }
    return (
        <div className="projects">
            <p>Projects is working</p>
            <a href="" onClick={()=>func()}>click me to be surprosed</a>
        </div>
    )
}

export default Projects