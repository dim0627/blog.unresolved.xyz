import React from 'react'
import Helmet from 'react-helmet'
import bases from '../styles/bases'

class Template extends React.Component {
  render() {
    const { _, children } = this.props

    return (
      <main>
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:500,600" rel="stylesheet" />
        </Helmet>
        <style>{bases}</style>
        {children()}
      </main>
    )
  }
}

export default Template
