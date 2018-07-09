import React from 'react'
import Link from 'gatsby-link'

export default ({ article }) => (
  <div>
    <Link to={`/posts/${article.slug}/`}>{article.title}</Link>
  </div>
)
