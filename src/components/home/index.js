import { Link } from "react-router-dom";
import './index.scss';
import Portrait from '../../assets/portrait.jpeg';
import { useState } from "react";
import AnimatedLetters from "../animatedLetters";

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['M','a','t','t','h','e','w',];
    const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r']

    

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}> H</span>
                    <span  className={`${letterClass} _12`}>e</span>
                    <span  className={`${letterClass} _13`}>l</span>
                    <span  className={`${letterClass} _14`}>l</span>
                    <span  className={`${letterClass} _16`}>o</span>
                    
                <br /> I'm <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                /><img src={Portrait}></img><br />Full-Stack <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={15}
                /></h1>
                
                <h2>Front-end, Backend etc...</h2>
                <Link to='/contact' className="flat-button">Contact Me!</Link>
            </div>
        </div>
    );
}

export default Home