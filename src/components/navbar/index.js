import React from 'react'
import './style.scss'
import CustomIcon from '../common/customIcon'
import colors from 'styles/colors.json'

const Navbar = () => {
  const menuItems = [
    { name: 'Home', url: '#' },
    { name: 'Experience', url: '/#about' },
    { name: 'Work', url: '/#work' },
    { name: 'Contact', url: '/#contact' },
  ]
  return (
    <div className="navbar">
      <CustomIcon name="logo" color={colors.lGreen} width={40} height={40} />
      <ul>
        {menuItems.map((item, index) => {
          return (
            <li>
              <a href={item.url}>
                <span>{index + 1}.</span>
                {item.name}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Navbar
