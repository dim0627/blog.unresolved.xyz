import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from "../components/Layout"
import Article from '../components/Article'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulPost.edges')

    return (
      <Layout location={this.props.location} >
        <div>
          <Helmet title={settings.site.title} />
          <Hero title={settings.site.title} sub={settings.site.description} background={posts[0].node.heroPhoto && posts[0].node.heroPhoto.file.url} />
          <Container>
            {posts.map(({ node }) => {
              return (
                <Article article={node} key={node.slug} />
              )
            })}
          </Container>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          slug
          date(formatString: "MMMM Do, YYYY")
          heroPhoto {
            file {
              url
            }
          }
          category {
            title
          }
        }
      }
    }
  }
`
