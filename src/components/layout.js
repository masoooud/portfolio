/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import PropTypes from 'prop-types'
import colors from 'styles/colors.json'
import './layout.scss'
import Footer from './footer/index'
import Navbar from './navbar'
import Links from './links'
import Email from './email'
import CustomIcon from './common/customIcon'
import { Fragment } from 'react'

const Layout = ({ children }) => {
  const scrollToTop = () => {
    console.log('scrollToTop called')
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <Fragment>
      <Navbar />
      <main className="main">{children}</main>
      <Links />
      <Email />
      <button className="rocket" onClick={scrollToTop}>
        <CustomIcon
          name="rocket"
          color={colors.lGreen}
          width={50}
          height={50}
        />
      </button>
      <Footer />
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
