import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import variables from '../variables'

const ArticleContainer = styled.article`
  margin: 2rem 0;

  a {
    display: block;
  }
`

const Title = styled.h2`
  margin-bottom: .5rem;
  font-size: 1.2rem;
  line-height: 1.5rem;
`

const Date = styled.div`
  color: ${variables.colorAccent}
`

export default ({ article }) => (
  <ArticleContainer>
    <Link to={`/${article.slug}/`}>
      <Title>{article.title}</Title>
      <Date>{article.date}</Date>
    </Link>
  </ArticleContainer>
)
