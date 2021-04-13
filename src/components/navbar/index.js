import React, { useState, Fragment } from 'react'
import './style.scss'
import CustomIcon from '../common/customIcon'
import colors from 'styles/colors.json'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const menuItems = [
    { name: 'Home', url: '#' },
    { name: 'Experience', url: '/#about' },
    { name: 'Work', url: '/#work' },
    { name: 'Contact', url: '/#contact' },
  ]

  const toggleMenu = () => {
    setOpen(!open)
  }
  return (
    <nav>
      <div className="navbar">
        <div className="logo-container">
          <CustomIcon
            name="logo"
            color={colors.lGreen}
            width={40}
            height={40}
          />
        </div>
        <div className="inlineNavbar">
          <ul>
            {menuItems.map((item, index) => {
              return (
                <li key={`menu-top-${index}`}>
                  <a href={item.url}>
                    <span>{index + 1}.</span>
                    {item.name}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <button onClick={toggleMenu} id="menuButton">
          <div className={!open ? 'open' : 'close'}>
            <CustomIcon
              name={'menu'}
              width={25}
              height={25}
              fill={colors.lGreen}
            />
          </div>
          <div className={`cancel ${open ? 'open' : 'close'}`}>
            <CustomIcon
              name="cancel"
              width={22}
              height={22}
              fill={colors.lGreen}
            />
          </div>
        </button>
      </div>
      <div className={`mobileMenu${open ? '' : ' close'}`} onClick={toggleMenu}>
        <button id="closeButton">
          <CustomIcon
            name="cancel"
            width={20}
            height={20}
            fill={colors.dblue}
          />
        </button>
        <ul>
          {menuItems.map((item, index) => {
            return (
              <li key={`menu-bottom-${index}`}>
                <a href={item.url}>{item.name}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
