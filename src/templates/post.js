import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import styled from 'styled-components'
import Container from '../components/Container'

const ArticleBody = styled.div`
`

class PostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Container>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div>
          <div>
            { post.heroPhoto && <img src={`${post.heroPhoto.file.url}?w=1180&h=400&fit=fill`} alt="" /> }
          </div>
          <h1 className="section-headline">{post.title}</h1>
          <p>
            {post.date}
          </p>
          <ArticleBody dangerouslySetInnerHTML={{__html: post.body.childMarkdownRemark.html}} />
        </div>
      </Container>
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
