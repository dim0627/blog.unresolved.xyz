import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import styled from 'styled-components'
import variables from '../variables'
import './Layout.css'
import favicon from '../images/favicon.png'

const Footer = styled.footer`
  margin: 1rem 0;
  padding: 0 1rem;
  font-size: .8rem;
`

export default ({ children }) => (
  <main>
    <Helmet>
      <meta name="theme-color" content={variables.colorMain} />
      <link rel="shortcut icon" href={favicon} />
    </Helmet>
    {children}
    <Footer>
      <div>Designed By <a href='https://yet.unresolved.xyz'>Daisuke Tsuji</a></div>
      <div>Generated By <a href='https://www.gatsbyjs.org/' rel='nofollow'>GatsbyJS</a></div>
      <div>Hosting On <a href='https://www.netlify.com/' rel='nofollow'>Netlify</a></div>
    </Footer>
  </main>
)
