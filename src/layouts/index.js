import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import variables from '../styles/variables'
import bases from '../styles/bases'
import favicon from '../images/favicon.png'
import Prism from 'prismjs'
Prism.highlightAll();

require("prism-themes/themes/prism-xonokai.css")

const Footer = styled.footer`
  padding: 1.5rem 1rem;
  font-size: .8rem;
  line-height: 1.5rem;
  text-align: center;

  a {
    color: ${variables.colorAccent};
  }
`

class Template extends React.Component {
  render() {
    const { _, children } = this.props

    return (
      <main>
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:500,600" rel="stylesheet" />
          <link rel="shortcut icon" href={favicon} />
        </Helmet>
        <style>{bases}</style>
        {children()}
        <Footer>
          <div>Designed By <a href='https://yet.unresolved.xyz'>Daisuke Tsuji</a></div>
          <div>Generated By <a href='https://www.gatsbyjs.org/' rel='nofollow'>GatsbyJS</a></div>
          <div>Hosting By <a href='https://www.netlify.com/' rel='nofollow'>Netlify</a></div>
        </Footer>
      </main>
    )
  }
}

export default Template
