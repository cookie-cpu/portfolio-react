import React from 'react'
import './resume.scss'
import Loader from "react-loaders";

export default function Resume() {
  return (
    <>
        <div className='resume-div'>
            <iframe src="https://resume.creddle.io/embed/7unjh2qlpud" width="850" height="750" seamless></iframe>
        </div>
        <Loader type='pacman'/>
    </>
  )
}
