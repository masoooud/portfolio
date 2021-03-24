import React from 'react'

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: `2rem`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://linkedin.com/in/masoud-moharrami">Masoud Moharrami</a>
    </footer>
  )
}

export default Footer
