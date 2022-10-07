import './index.scss'
import Loader from 'react-loaders'

const Contact = () => {
    return (
        <>
            <div className='container contact-page'>
            <div className='text-zone'>
                <h1>Contact me!</h1>
                <p>Full-Stack Web Development Bootcamp Graduate looking for work</p>
                </div>
            </div>
            <Loader type="pacman"></Loader>
        </>
    )
}

export default Contact