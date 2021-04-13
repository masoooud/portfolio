import React from 'react'
import Logo from './icons/logo'
import Github from './icons/github'
import Twitter from './icons/twitter'
import Linkedin from './icons/linkedin'
import Menu from './icons/menu'
import Cancel from './icons/cancel'
import Rocket from './icons/rocket'

const CustomIcon = ({ name, size = 25, color, style, ...props }) => {
  switch (name) {
    case 'logo':
      return <Logo size={size} fill={color} style={style} {...props} />
    case 'github':
      return <Github size={size} fill={color} style={style} {...props} />
    case 'linkedin':
      return <Linkedin size={size} fill={color} style={style} {...props} />
    case 'twitter':
      return <Twitter size={size} fill={color} style={style} {...props} />
    case 'menu':
      return <Menu size={size} fill={color} style={style} {...props} />
    case 'cancel':
      return <Cancel size={size} fill={color} style={style} {...props} />
    case 'rocket':
      return <Rocket size={size} fill={color} style={style} {...props} />

    default:
      return '?'
  }
}

export default CustomIcon
