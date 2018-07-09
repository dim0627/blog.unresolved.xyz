import React from 'react'
import Helmet from 'react-helmet'

class Template extends React.Component {
  render() {
    const { _, children } = this.props

    return (
      <main>
        <Helmet>
          <link rel="stylesheet" type="text/css" href="/styles.css" />
        </Helmet>
        {children()}
      </main>
    )
  }
}

export default Template
