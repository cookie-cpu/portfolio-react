import './index.scss'
import Loader from 'react-loaders'
import ProjectCard from '../projectcard'
import img1 from '../../assets/projects/portfoliosite.png'
import jsonData from '../../assets/projectData.json';
import TabPanel from '../TabPanel'

export default function Projects () {
  
    // const projectData= [
    //     { id: 1, title: "Portfolio Site", 
    //     description: "a website to display my projects (site you are currently on)", 
    //     stack: ['react', 'scss', 'material UI', 'heroku'], 
    //     img: img1, 
    //     demo: "https://matthewcook-portfolio.herokuapp.com/", 
    //     repo:"https://github.com/cookie-cpu/portfolio-react"},

    //     { id: 2, title: "Other Site", 
    //     description: "descript", 
    //     stack: ['html', 'css', 'javscript'], 
    //     image: '../../assets/projects/portfoliosite.png', 
    //     demo: "", 
    //     repo:""},

    //     { id: 3, title: "new Site", 
    //     description: "descript", 
    //     stack: ['html', 'css', 'javscript'], 
    //     image: '../../assets/projects/portfoliosite.png', 
    //     demo: "", 
    //     repo:""},
    //   ];  

    //   console.log(jsonData.projects[0].title);
    //   console.log(projectData[1].title);

    // {jsonData.project[0].description}
    
    
    const projectList = jsonData.projects.map((project) => {
        return (
            <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                stack={project.stack}
                img={project.img}
                demo={project.demo}
                repo={project.repo}
            />
        )
      })

    return (
        <>
            <div className='container projects-page'>
                <h1 className='title'>Projects</h1>
                    <div className='projects'>
                        {/* <TabPanel /> */}
                        {projectList}
                    </div>
            </div>

            <Loader type="pacman"></Loader>
        </>
    )
}