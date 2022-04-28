import Programmer from '../../assets/programmer.jpg'
import './ProjectOverview.css'

function ProjectOverview () {
    return (
        <div className="projects-item ">
            <a  className="project">
                <div className="icon">
                    <img className="overview" src={Programmer} alt="website overview" height={250} />
                </div>
                <div className="content">
                    <div className="title">SDR Neural Network</div>
                    <div className="rounded"></div>
        
                    <p>Developed in C++,an Artificial Neural network system from scratch that would recognize numbers from a seven-segment display</p>
                    <p>Utilized activation functions and perceptron in building this model</p> 
                </div>
        
                <div className="item-arrow">
                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
            </a>          
        </div>
    )
}

export default ProjectOverview