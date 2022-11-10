import './index.scss'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa0, faBookAtlas, faBookJournalWhills, faBookOpen, faContactBook, faEnvelope, faFileCode, faFileContract, faFilePdf, faFileText, faFolder, faHome, faMailBulk, faMailForward, faMailReply, faPaperPlane, faPerson, faUser, } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faReadme, faMailchimp } from '@fortawesome/free-brands-svg-icons'



const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7tza6l8', 'template_8q2hp86', form.current, 'nlMriA0LkRcXJ_Dtk')
        .then(
            () => {
              alert('Message sent! Thank you for reaching out')
            //   window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          );
    };

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>Contact</h1>
                    <p>
                        Feel free to contact me via my Linkedin <FontAwesomeIcon icon={faLinkedin} /> or Email <FontAwesomeIcon icon={faEnvelope} /> using the links or form below.
                    </p>
                    <div className='contact-me-links'>
                        <ul>
                            <li>
                                <a id='linkedin-link' target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/matthew-cook-735881208/">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </li>
                            <li>
                                <a id='email-link' target="_blank" rel="noreferrer" href="mailto:matthewcook13987@gmail.com">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="contact-form">
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
                                    <button type="submit" className="send-button">SEND <FontAwesomeIcon icon={faPaperPlane}/></button>
                                </li>
                            </ul>
                        </form>
                    </div>

                </div>
            </div>




            <Loader type="pacman"></Loader>
        </>
    )
}

export default Contact