import React from 'react'
import styled from 'styled-components'

const Hero = styled.header`
`

const Title = styled.h1`
`

export default ({ title }) => (
  <Hero>
    <Title>{title}</Title>
  </Hero>
)
