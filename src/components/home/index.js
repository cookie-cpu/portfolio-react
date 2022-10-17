import { Link } from "react-router-dom";
import './index.scss';
import Portrait from '../../assets/portrait.jpeg';
// import { useEffect, useState } from "react";
// import AnimatedLetters from "../animatedLetters";
import Loader from "react-loaders";

const Home = () => {

    // useEffect(() => {
    //     return setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 4000)
    //   }, [])

    // const [letterClass, setLetterClass] = useState('text-animate');
    
    // const nameArray = [' ','M','a','t','t','h','e','w',];
    // const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r']

    

    return (<>
        
        <div className="container home-page">
            <div className="text-zone">
            <h1> Hi! <br></br>
            I'm Matthew Cook<br></br> Web Developer<img src={Portrait} alt="matthew-profile"/></h1>
            
                <h2>Front-end, Backend etc...</h2>
                <Link to='/contact' className="flat-button">Contact Me!</Link>
                <Link to='/projects' className="flat-button">Portfolio</Link>
            </div>
        </div>
        <Loader type='pacman'/>
        </>);
}

export default Home