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
import AnimatedLetters from "../animatedLetters";
import { useState, useEffect } from "react";
import Glitch from "../glitch/Glitch";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      }, []);

    return (
    <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <span className={`${letterClass} _13`}> </span>
                    <span className={`${letterClass} _14`}>I</span>
                    <span className={`${letterClass} _15`}>'m</span>
                    <span className={`${letterClass} _16`}> </span>
                </h1>

                <h1>
                     <span className={`${letterClass} _17`}>Matthew </span>
                     <span className={`${letterClass} _18`}></span>
                     <span className={`${letterClass} _19`}>Cook </span>
                     </h1>
                <h1><span className={`${letterClass} _20`}>Web Developer </span></h1>
                <h2>
                    {/* <Glitch text="welcome to my website" subtitle=""/> */}
                    Welcome to my website
                </h2>

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