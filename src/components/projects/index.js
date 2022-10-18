import './index.scss'
import Loader from 'react-loaders'
import ProjectCard from '../projectcard'
import img1 from '../../assets/projects/portfoliosite.png'


const Projects = () => {
    return (
        <>
            <div className='container projects-page'>
                <h1 className='title'>Projects</h1>

                    <div className='projects'>
                        
                        
                        { /* CARD TEMPLATE
                        <BasicCard 
                            title={"title"}
                            description={"description"}
                            stack={["front end","database"]}
                            // img={img1}
                            demo={"link1"}
                            repo={"link2"}
                        /> */}

                        <ProjectCard 
                            title={"Portfolio Site"}
                            description={"a website to display my projects (site you are currently on)"}
                            stack={['react', 'scss', 'material UI', 'heroku']}
                            img={img1}
                            demo={"https://matthewcook-portfolio.herokuapp.com/"}
                            repo={"https://github.com/cookie-cpu/portfolio-react"}
                        />

                        <ProjectCard 
                            title={"other project"}
                            description={"lorem ipsum"}
                            stack={["react", 'scss', 'sql']}
                            // img={img1}
                            // demo={"/"}
                            // repo={"/"}
                        />

                    </div>
                    



            </div>
            <Loader type="pacman"></Loader>
        </>
    )
}

export default Projects