import * as React from 'react'
import Layout from 'components/layout'
import SEO from 'components/seo'
import 'styles/styles.scss'
import Hero from 'components/hero'

import Projects from 'components/projects'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <Hero />

      <Projects />

      {/* <ParallaxPage /> */}
    </Layout>
  )
}

export default IndexPage
