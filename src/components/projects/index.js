import './index.scss'
import Loader from 'react-loaders'
import ProjectCard from '../projectcard'
import img1 from '../../assets/projects/portfoliosite.png'
// import ProjectData from '../../assets/projectData.json';


export default function Projects () {
    let data = [
        { id: 1, title: "Portfolio Site", 
        description: "a website to display my projects (site you are currently on)", 
        stack: ['react', 'scss', 'material UI', 'heroku'], 
        img: img1, 
        demo: "https://matthewcook-portfolio.herokuapp.com/", 
        repo:"https://github.com/cookie-cpu/portfolio-react"},

        { id: 2, title: "Other Site", 
        description: "descript", 
        stack: ['html', 'css', 'javscript'], 
        image: '../../assets/projects/portfoliosite.png', 
        demo: "https://matthewcook-portfolio.herokuapp.com/", 
        repo:"https://github.com/cookie-cpu/portfolio-react"},

        // { id: 2, title: "Johnny", description: "male", stack: ['html','css'], image: "", demo: "", repo:""},
        // { id: 3, title: "Johnny", description: "male", stack: ['html','css'], image: "", demo: "", repo:""},
      ];



    // console.log(ProjectData);

    // const projectList = ProjectData.map((project) => {
    //     return (
    //         <ProjectCard 
    //         title={project.title}
    //         description={"a website to display my projects (site you are currently on)"}
    //         stack={['react', 'scss', 'material UI', 'heroku']}
    //         img={img1}
    //         demo={"https://matthewcook-portfolio.herokuapp.com/"}
    //         repo={"https://github.com/cookie-cpu/portfolio-react"}
    //     />
    //     )
    //   })
    

    const projectList = data.map((project) => {
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
                {/* <p style={{fontSize: 24, textAlign: "center", paddingTop: "75px",}}>test</p> */}
                    <div className='projects'>
                        {projectList}
                        
                        { /* CARD TEMPLATE
                        <BasicCard 
                            title={"title"}
                            description={"description"}
                            stack={["front end","database"]}
                            // img={img1}
                            demo={"link1"}
                            repo={"link2"}
                        /> */}

                        {/* <ProjectCard 
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
                        /> */}
                    </div>
            </div>

            <Loader type="pacman"></Loader>
        </>
    )
}