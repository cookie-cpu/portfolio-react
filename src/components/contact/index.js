import './index.scss'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    // const form = useRef()
    // const sendEmail = (e) => {
    //     e.preventDefault()
    
    //     emailjs
    //       .sendForm('service_2j7wwoi', 'template_2yknxkg', form.current, 'nlMriA0LkRcXJ_Dtk')
    //       .then(
    //         () => {
    //           alert('Message successfully sent!')
    //           window.location.reload(false)
    //         },
    //         () => {
    //           alert('Failed to send the message, please try again')
    //         }
    //       )
    //   }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>Contact me!</h1>
                    <p>Full-Stack Web Development Bootcamp Graduate looking for work</p>
                    
                    {/* <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div> */}
                    
                </div>
            </div>
            <Loader type="pacman"></Loader>
        </>
    )
}

export default Contact