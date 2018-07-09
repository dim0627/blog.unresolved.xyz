import React from 'react'

class Template extends React.Component {
  render() {
    const { _, children } = this.props

    return (
      <main>
        {children()}
      </main>
    )
  }
}

export default Template
