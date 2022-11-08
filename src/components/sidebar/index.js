import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fa0, faBookAtlas, faBookJournalWhills, faBookOpen, faContactBook, faEnvelope, faFileCode, faFileContract, faFilePdf, faFileText, faFolder, faHome, faPerson, faUser, } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub, faReadme} from '@fortawesome/free-brands-svg-icons'
// import Logo1 from '.../src/assets/Matthew Cook.png
import Logo1 from '../../assets//MatthewCookLogo.png'




const SideBar = () => {
    return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img className='logo-image' src={Logo1} alt="logo" />
            {/* <p className="sub-logo">Matthew Cook</p> */}
            {/* <img className="sub-logo"src={Logo2} alt="logo2" /> */}
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link"to="/projects">
                <FontAwesomeIcon icon={faFolder} color="4d4d4e" /> 
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="resume-link"to="/resume">
                <FontAwesomeIcon icon={faFileText} color="4d4d4e" /> 
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link"to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a id='linkedin-link' target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/matthew-cook-735881208/">
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a>
            </li>
            <li>
                <a id='github-link' target="_blank" rel="noreferrer" href="https://github.com/cookie-cpu">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </li>
            <li>
                <a id='resume-link' target="_blank" rel="noreferrer" href="https://resume.creddle.io/resume/7unjh2qlpud">
                    <FontAwesomeIcon icon={faFileText}/><br />
                </a>
            </li>
        </ul>

    </div>
    )
}

export default SideBar