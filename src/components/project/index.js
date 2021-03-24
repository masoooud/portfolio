import React from 'react'

import './style.scss'
import { Link } from 'gatsby'
import image from '../../images/shadow-mockup.png'

const Project = ({ detail }) => {
  return (
    <div className="card">
      <div className="background" />

      <div className="bigTitle">
        <h2>{detail.title}</h2>
      </div>
      <img src={image} className="image" alt={detail.title} />
      <div className={`content`}>
        <h2>{detail.title}</h2>
        <p>{detail.shortDesc}</p>
        <Link to="">Read More</Link>
      </div>
    </div>
  )
}

export default Project
