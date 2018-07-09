import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Article = styled.article`
  a {
    display: block;
  }
`

export default ({ article }) => (
  <Article>
    <Link to={`/posts/${article.slug}/`}>{article.title}</Link>
  </Article>
)
