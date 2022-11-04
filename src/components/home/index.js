import { Link } from "react-router-dom";
import './index.scss';
import Portrait from '../../assets/portrait.jpeg';
import Loader from "react-loaders";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFolder, faFolderBlank, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";

const Home = () => {

    return (
    <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi!</h1>

                <h1>I'm Matthew Cook</h1>
                <h1>Web Developer</h1>
                <h2>Front-end, Backend etc...</h2>

                <div>
                    <Link to='/contact' className="flat-button">Contact <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" /> </Link>
                    <Link to='/projects' className="flat-button">Projects <FontAwesomeIcon icon={faFolder} color="4d4d4e" /></Link>
                </div>
            </div>
            {/* <img src={Portrait} alt="matthew-profile"/> */}
        </div>

        <Loader type='pacman'/>
    </>
    );
}

export default Home