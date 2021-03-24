/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import PropTypes from 'prop-types'

import './layout.scss'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <>
      <main className="main">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
