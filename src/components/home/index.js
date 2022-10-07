import { Link } from "react-router-dom";
import './index.scss';
import Portrait from '../../assets/portrait.jpeg';
import { useEffect, useState } from "react";
import AnimatedLetters from "../animatedLetters";

const Home = () => {

    // useEffect(() => {
    //     return setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 4000)
    //   }, [])

    const [letterClass, setLetterClass] = useState('text-animate');
    
    const nameArray = [' ','M','a','t','t','h','e','w',];
    const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r']

    

    return (<>
        
        <div className="container home-page">
            <div className="text-zone">
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            /><img src={Portrait}/>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1> 
                <h2>Front-end, Backend etc...</h2>
                <Link to='/contact' className="flat-button">Contact Me!</Link>
                <Link to='/projects' className="flat-button">Portfolio</Link>
            </div>
        </div>
        </>);
}

export default Home