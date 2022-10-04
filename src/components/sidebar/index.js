import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'
//import Logo1 from
//import Logo2 from 
let Logo1 = ''
let Logo2 = ''

const SideBar = () => {
    return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo1} alt="logo" />
            <img className="sub-logo"src={Logo2} alt="logo2" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="4d4d4e" />
            </NavLink>
        </nav>

    </div>
    )
}

export default SideBar