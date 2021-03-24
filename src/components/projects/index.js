import React from 'react'
import Project from 'components/project'
import './style.scss'

const Projects = props => {
  const projects = [
    {
      title: 'DigiPower',
      type: 'React Native',
      background: '../images/DigiPower.jpg',
      image: '../images/img_parallax.jpg',
      shortDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla laoreet consequat molestie.', // 100 character
    },
    {
      title: 'ConcertPlus',
      type: 'React Native',
      background: '../images/DigiPower.jpg',
      image: '../images/img_parallax.jpg',
      shortDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla laoreet consequat molestie.', // 100 character
    },
    {
      title: 'DigiPower',
      type: 'React Native',
      background: '../images/DigiPower.jpg',
      image: '../images/img_parallax.jpg',
      shortDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla laoreet consequat molestie.', // 100 character
    },
  ]

  return (
    <div className="project-container">
      {projects.map((project, index) => (
        <Project detail={project} index={index} key={`projects-${index}`} />
      ))}
    </div>
  )
}

export default Projects
