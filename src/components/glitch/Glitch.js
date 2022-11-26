import React from 'react'
import './glitch.scss'

export default function Glitch({text, subtitle}) {
  return (
    <>
    <div class="container">
  <div class="glitch" data-text={text}>{text}</div>
  <div class="glow">{text}</div>
  <p class="subtitle">{subtitle}</p>
  </div>
  <div class="scanlines"></div>
      
    </>
  )
}
