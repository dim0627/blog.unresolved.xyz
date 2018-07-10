import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/Hero'
import Article from '../components/Article'
import Container from '../components/Container'
import settings from '../settings/settings'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulPost.edges')
    const [author] = get(this, 'props.data.allContentfulAuthor.edges')

    return (
      <div>
        <Helmet title={settings.site.title} />
        <Hero title={settings.site.title} sub={settings.site.description} />
        <Container>
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <Article article={node} />
                </li>
              )
            })}
          </ul>
        </Container>
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          slug
          date(formatString: "MMMM Do, YYYY")
          category {
            title
          }
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
    }
    allContentfulAuthor {
      edges {
        node {
          name
          biography {
            biography
          }
          profilePhoto {
            file {
              url
            }
          }
        }
      }
    }
  }
`
