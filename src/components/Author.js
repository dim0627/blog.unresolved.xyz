import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import variables from '../styles/variables'

const Author = styled.div`
  margin: 5rem 0;
`

const Title = styled.h2 `
  position: relative;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  color: ${variables.colorMain};
  font-weight: 700;
  background: linear-gradient(90deg, ${variables.colorMain}, ${variables.colorAccent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 4px;
  text-align: center;

  &::after {
    position: absolute;
    content: '';
    right: 0;
    bottom: 0;
    left: 0;
    width: .5rem;
    height: .5rem;
    margin: 0 auto;
    border-radius: 50%;
    background: linear-gradient(90deg, ${variables.colorMain}, ${variables.colorAccent});
  }
`

const Img = styled.img`
  display: block;
  width: 8rem;
  float: left;
  border-radius: 50%;

  @media screen and (max-width: 767px) {
    margin: 0 auto 1.5rem;
    float: none;
  }
`

const Details = styled.div`
  margin-left: 9.5rem;

  @media screen and (max-width: 767px) {
    margin: 0;
  }
`

const Name = styled.div`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.5rem;

  @media screen and (max-width: 767px) {
    text-align: center;
  }

  a {
    color: ${variables.colorAccent};
  }
`

const Biography = styled.div`
  p {
    margin: .5rem 0;
    line-height: 1.25rem;
  }
`

export default ({ author }) => (
  <Author>
    <Title>AUTHOR</Title>
    <Img src={author.profilePhoto.file.url} alt={author.name} />
    <Details>
      <Name>{author.name}{author.twitterId && <a href={`https://twitter.com/${author.twitterId}`} target='_blank' rel='nofollow'>@{author.twitterId}</a>}</Name>
      <Biography dangerouslySetInnerHTML={{__html: author.biography.childMarkdownRemark.html}} />
    </Details>
  </Author>
)
