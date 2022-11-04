import './index.scss'
import Loader from 'react-loaders'
import ProjectCard from '../projectcard'
import img1 from '../../assets/projects/portfoliosite.png'
import jsonData from '../../assets/projectData.json';
import TabPanel from '../TabPanel'

export default function Projects () {
  
    return (
        <>
            <div className='projects-page'>
                <h1 className='title'>Projects</h1>
                        <TabPanel /> 
            </div>

            <Loader type="pacman"></Loader>
        </>
    )
}