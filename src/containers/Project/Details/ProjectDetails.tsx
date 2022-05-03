import './ProjectDetails.css'
import Button from '@mui/material/Button'
import GitHub from '@mui/icons-material/GitHub'


export default function ProjectDetails(prop: any) {
    console.log(prop)
    return (
        <div className="details-container">
            <div className="details">
                <div className="title">
                    <h1>{prop.data.title}</h1>
                    <p>Tech Stack: {prop.data.stack}</p>
                </div>
                <div className="links">
                    <Button sx={{mr: '4em'}} onClick={()=> window.open(`${prop.data.demo}`, '_blank')} color='secondary' variant="contained">See demo</Button>
                    <Button onClick={()=> window.open(`${prop.data.github}`, '_blank')} color="primary" variant="contained" >Github Repo <GitHub sx={{ml: '0.5em'}} /></Button>
                </div>
            </div>
            <div className="details-content">
                <div className="details-desc">
                    <h1>Project Description</h1>
                    <p>{prop.data.desc}</p>
                </div>
                <div className="prob">
                    <h1>The Problem</h1>
                    <p>{prop.data.prob}</p>
                </div>
            </div>
        </div>
    )
}