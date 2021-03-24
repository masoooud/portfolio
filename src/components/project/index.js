import React from 'react'

import './style.scss'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Project = ({ detail }) => {
  return (
    <div className="card">
      <div className="background" />

      <div className="bigTitle">
        <h2>{detail.title}</h2>
      </div>
      <StaticImage
        src="../../images/shadow-mockup.png"
        className="image"
        id="image"
        alt="React/React Native Logo"
      />
      <div className={`content`}>
        <h2>{detail.title}</h2>
        <p>{detail.shortDesc}</p>
        <Link to="">Read More</Link>
      </div>
    </div>
  )
}

export default Project
