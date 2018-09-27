import React from 'react'
import Layout from "../components/layout"
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

    return (
      <Layout location={this.props.location}>
        <Helmet title={settings.site.title} />
        <Hero title={settings.site.title} sub={settings.site.description} background={posts[0].node.heroPhoto && posts[0].node.heroPhoto.file.url} />
        <Container>
          {posts.map(({ node }) => {
            return (
              <Article article={node} key={node.slug} />
            )
          })}
        </Container>
      </Layout>
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
