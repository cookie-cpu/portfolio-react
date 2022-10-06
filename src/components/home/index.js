import { Link } from "react-router-dom";
import './index.scss';
import Portrait from '../../assets/portrait.jpeg';

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hello!<br /> I'm Matthew!<img src={Portrait}></img><br />Full-Stack Web Developer!</h1>
                <h2>Front-end, Backend etc...</h2>
                <Link to='/contact' className="flat-button">Contact Me!</Link>
            </div>
        </div>
    );
}

export default Home