import { Link } from "react-router-dom";
import './index.scss';
import Portrait from '../../assets/portrait.jpeg';
import Loader from "react-loaders";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFileText, faFolder, faFolderBlank, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faCss3, faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
   // faCss3,
    faCss3Alt,
    faGitAlt,
    faHtml5,
    faJs,
    faNode,
    faReact,
} from '@fortawesome/free-brands-svg-icons'

const Home = () => {

    return (
    <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi!</h1>

                <h1>I'm Matthew Cook</h1>
                <h1>Web Developer</h1>
                <h2>Welcome to my website</h2>

                <div>
                    <Link to='/contact' className="flat-button">Contact <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" /> </Link>
                    <Link to='/projects' className="flat-button">Projects <FontAwesomeIcon icon={faFolder} color="4d4d4e" /></Link>
                    <a target='blank' href="https://resume.creddle.io/resume/7unjh2qlpud" className="flat-button">Resume <FontAwesomeIcon icon={faFileText} color="4d4d4e" /></a>
                </div>
            </div>
            
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faHtml5} color="#E34C26" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faCss3Alt} color="#3c99dc" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faJs} color="#f0db4f" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faNode} color="#3c873a" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faReact} color="#61dbfb" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#333333" />
                    </div>
                </div>
            </div>
        </div>

        <Loader type='pacman'/>
    </>
    );
}

export default Home