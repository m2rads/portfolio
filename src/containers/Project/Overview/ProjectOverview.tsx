import Programmer from '../../../assets/programmer.jpg'
import { Button } from '@mui/material';
import './ProjectOverview.css'

function ProjectOverview (proDetails: any) {
    const text = proDetails.projects.desc
    var description = text.replace(/<[^>]+>/g, '');
    console.log(proDetails.projects.overview)
    return (
        <div className='project-wrapper'>
            <a className='project-post'>
                <div className="img-wrap">
                    <img src={Programmer} />  
                </div>
                <div className="content-wrap">
                    <div className="title layout">
                        <h1>{proDetails.projects.title}</h1>
                    </div>
                    <div className="tech-stack layout">
                        <p>Tech Stack: {proDetails.projects.stack} </p>
                    </div>
                    <div className="desc layout">
                        <p>{description.substring(0, 1000)}</p><span>...</span>
                    </div>
                    <div className="button layout">
                        <Button sx={{mr: '2em'}}   onClick={()=> window.open(`${proDetails.projects.overview}`, '_blank')} variant="contained">Read More</Button>
                        <Button color="secondary" onClick={()=> window.open(`${proDetails.projects.demo}`, '_blank')} variant="contained">See Demo</Button>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ProjectOverview