import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './style.scss'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="heroInner">
        <p id="hi">Hi, my name is</p>
        <h1 id="masoud">Masoud Moharrami</h1>
        <h2 className="subtitle">I build things for the mobile & web.</h2>
        <p id="desc">
          I'm Software Engineer who is exceptional in building digital
          experience.
        </p>
        <a href="mailto:m.masoud.1991@gmail.com">Get In Touch</a>
      </div>
    </div>
  )
}

export default Hero
