import Loader from 'react-loaders';
import AnimatedLetters from '../animatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import {
    faCss3,
    faCss3Alt,
    faGitAlt,
    faHtml5,
    faJs,
    faNode,
    faReact,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>About me!
                        {/* <AnimatedLetters
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            index={15}
                        /> */}
                    </h1>

                    <p>Fascinated by all things technology, I love understanding how parts within a computer work, how systems talk to each other, and how people engage with them. This has led me to pursue a career in web development where I can apply my creative problem solving skills to connect people and solve problems through accessible and responsively designed websites.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa. Mauris vitae ultricies leo integer. Lacus vestibulum sed arcu non. Rhoncus mattis rhoncus urna neque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Neque vitae tempus quam pellentesque nec nam. Euismod elementum nisi quis eleifend quam adipiscing. Adipiscing elit ut aliquam purus. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa. Mauris vitae ultricies leo integer. Lacus vestibulum sed arcu non. Rhoncus mattis rhoncus urna neque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Neque vitae tempus quam pellentesque nec nam. Euismod elementum nisi quis eleifend quam adipiscing. Adipiscing elit ut aliquam purus. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat.</p>




                </div>
            </div>
            
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faHtml5} color="red" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faCss3Alt} color="blue" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faJs} color="yellow" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faNode} color="green" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faReact} color="royalblue" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="gray" />
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About;