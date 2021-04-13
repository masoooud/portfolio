import React from 'react'
import './style.scss'
import colors from 'styles/colors.json'
import CustomIcon from 'components/common/customIcon'

const Links = () => {
  const links = [
    { url: 'https://github.com/masoooud', icon: 'github' },
    {
      url: 'https://linkedin.com/in/masoud-moharrami',
      icon: 'linkedin',
    },
    {
      url: 'https://twitter.com/MasoudMoharrami',
      icon: 'twitter',
    },
  ]
  return (
    <div className="linkbar">
      {links.map((item, index) => (
        <a href={item.url} key={`link-${index}`}>
          <CustomIcon
            name={item.icon}
            fill={colors.lGreen}
            width={25}
            height={25}
          />
        </a>
      ))}
      <div className="line"></div>
    </div>
  )
}

export default Links
