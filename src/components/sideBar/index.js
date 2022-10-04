import './index.scss'
import { Link } from 'react-router-dom'
//import Logo1 from
//import Logo2 from 
let Logo1 = ''
let Logo2 = ''

const SideBar = () => {
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo1} alt="logo" />
            <img src={Logo2} alt="logo2" />
        </Link>

    </div>
}

export default SideBar