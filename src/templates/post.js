import React from 'react'
import get from 'lodash/get'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Container from '../components/Container'
import Author from '../components/Author'
import Share from '../components/Share'
import Disqus from '../components/Disqus'
import MetaTags from '../components/MetaTags'
import variables from '../styles/variables'
import settings from '../settings/settings'
import Prism from 'prismjs'

require("prism-themes/themes/prism-xonokai.css")

const ArticleBody = styled.div`
  margin-bottom: 4rem;

  h2 {
    position: relative;
    margin: 4rem 0 2rem;
    padding-bottom: 1.5rem;
    color: ${variables.colorMain};
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2.5rem;
    background: linear-gradient(90deg, ${variables.colorMain}, ${variables.colorAccent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &::after {
      content: '';
      position: absolute;
      bottom: .25rem;
      left: 0;
      width: 8rem;
      height: 4px;
      background: linear-gradient(90deg, ${variables.colorMain}, ${variables.colorAccent});
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
    color: ${variables.colorAccent};
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
    margin: 0 -1rem;
    padding: 1rem;
    overflow: scroll;
    border: 0;
    border-radius: 8px;
    background-color: #333;

    @media screen and (max-width: 767px) {
      border-radius: 0;
    }

    code {
      color: #fff;
      font-family: monospace;
      font-size: .8rem;
      line-height: 1rem;
    }
  }

  pre[class*="language-"] {
    border: 0;

    @media screen and (max-width: 767px) {
      border-radius: 0;
    }
  }

  blockquote {
    margin: 0 -1rem;
    padding: .5rem 1rem;
    border: 1px solid ${variables.colorBorder};
    border-radius: 4px;
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, .08);
    font-size: .9rem;

    @media screen and (max-width: 767px) {
      border-right: 0;
      border-left: 0;
      border-radius: 0;
    }

    p {
      margin: .5rem 0;
      line-height: 1.25rem;
    }
  }
`

class PostTemplate extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }

  render() {
    const post = get(this.props, 'data.contentfulPost')

    return (
      <div>
        <MetaTags title={post.title} url={`${settings.site.baseUrl}/${post.slug}`} description={post.body.childMarkdownRemark.excerpt} image={post.heroPhoto && post.heroPhoto.file.url} />
        <Hero title={post.title} sub={post.date} background={post.heroPhoto && post.heroPhoto.file.url} heading={true} />
        <Container>
          <ArticleBody dangerouslySetInnerHTML={{__html: post.body.childMarkdownRemark.html}} />
          <Share title={post.title} url={`${settings.site.baseUrl}/${post.slug}`} />
          <Disqus url={`${settings.site.baseUrl}/${post.slug}`} identifier={post.slug} title={post.title} />
          <Author author={post.author} />
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
          excerpt(pruneLength: 400)
        }
      }
      author {
        name
        biography {
          childMarkdownRemark {
            html
          }
        }
        twitterId
        profilePhoto {
          file {
            url
          }
        }
      }
    }
  }
`
