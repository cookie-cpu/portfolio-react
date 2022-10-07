import './index.scss';
import SideBar from '../sidebar/index'
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (

        <div className='App'>
            <SideBar />
            <div className='page'>
                {/* <span className='tags top-tags'>&lt;body1 lorem ipsum&gt;</span> */}

            <Outlet />
            {/* <span className='tags bottom-tags'>
            &lt;body2&gt;
            <br />
            <span className='bottom-tag-html'>&lt;html bottom&gt;</span>
            </span> */}

            </div>
        </div>
    )
}

export default Layout