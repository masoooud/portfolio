import React from 'react'
import './style.scss'
import colors from 'styles/colors.json'
import CustomIcon from 'components/common/customIcon'

const Email = () => {
  return (
    <div className="emailbar">
      <a href="mailto:m.masoud.1991@gmail.com">m.masoud.1991@gmail.com</a>
      <div className="line"></div>
    </div>
  )
}

export default Email
