import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Container from '../components/Container'
import variables from '../styles/variables'

const ArticleBody = styled.div`
  h2 {
    position: relative;
    margin: 4rem 0 2rem;
    padding-bottom: 1.5rem;
    color: ${variables.colorMain};
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2.5rem;
    background: -webkit-linear-gradient(0deg, ${variables.colorMain}, ${variables.colorAccent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &::after {
      content: '';
      position: absolute;
      bottom: .25rem;
      left: 0;
      width: 8rem;
      height: 4px;
      background: -webkit-linear-gradient(0deg, ${variables.colorMain}, ${variables.colorAccent});
      transform: perspective(70px) rotateY(15deg) rotate(-3deg);
    }
  }

  h3 {
    margin: 3rem 0 1.5rem;
    color: ${variables.colorMain};
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.5rem;
  }

  a {
    color: ${variables.colorAccent}
    text-decoration: underline;
  }

  p {
    margin: 1.5rem 0;
    line-height: 2rem;
  }

  ul, ol {
    padding-left: 2rem;
  }

  li {
    margin: .5rem 0;
    line-height: 2rem;

    p {
      margin: 0;
    }
  }

  pre {
    padding: 1rem;
    overflow: scroll;
    background-color: #333;
    color: #fff;
    font-family: monospace;
    font-size: .8rem;
  }
`

class PostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div>
        <Hero title={post.title} sub={post.date} background={post.heroPhoto.file.url} heading={true} />
        <Container>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div>
            <ArticleBody dangerouslySetInnerHTML={{__html: post.body.childMarkdownRemark.html}} />
          </div>
        </Container>
      </div>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      date(formatString: "MMMM Do, YYYY")
      heroPhoto {
        file {
          url
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
