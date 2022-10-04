import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
// import Logo1 from '.../src/assets/Matthew Cook.png
import Logo1 from '../../assets//MatthewCookLogo.png'




const SideBar = () => {
    return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo1} alt="logo" />
            <p>Matthew Cook</p>
            {/* <img className="sub-logo"src={Logo2} alt="logo2" /> */}
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link"to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
            </NavLink>
        </nav>

    </div>
    )
}

export default SideBar