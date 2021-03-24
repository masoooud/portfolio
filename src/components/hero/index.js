import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { StaticImage } from "gatsby-plugin-image"

import "./style.scss"

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".heroContainer",
          pin: true,
          start: "60% 60%",
          end: "80% 40%",
          scrub: true,
        },
      })
      .to("#masoud", { y: -150 }, 0)
      .to(".heroJobRow", { y: -150 }, 0)
  }, [])
  return (
    <div className="heroContainer">
      <h1>Hi</h1>
      <div className="heroInner">
        <h1 id="masoud">I'm, Masoud</h1>
        <div className="heroJobRow">
          <h1>a </h1>
          <StaticImage
            src="../../images/react-logo.png"
            id="react-logo"
            alt="React/React Native Logo"
            width={150}
            height={150}
          />
          <h1>Developer</h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
