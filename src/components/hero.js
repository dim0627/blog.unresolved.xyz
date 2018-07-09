import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container'
import styled from 'styled-components'
import variables from '../styles/variables'
import settings from '../settings/settings'

const Hero = styled.header`
  position: relative;

  &::before,
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
  }

  &::before {
    background: linear-gradient(to right, ${variables.colorMain}, ${variables.colorAccent});
    opacity: .8;
  }

  &::after {
    background-color: rgba(0, 0, 0, .6);
  }
`

const Inner = styled.div`
  position: relative;
  z-index: 10;
`

const Body = styled.div`
  padding: 3rem 0;
`

const Header = styled.header`
  padding: .5rem 0;
  background-color: rgba(0, 0, 0, .3);
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2rem;

  a {
    color: #fff;
  }
`

const Title = styled.h1`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.5rem;
`

const Sub = styled.div`
  color: #fff;
  margin-top: 1.5rem;
  font-size: .8rem;
  font-weight: 700;
`

export default ({ sub, title, background, heading }) => (
  <div style={{background: `center / cover no-repeat url(${background})`}}>
    <Hero>
      <Inner>
        { heading &&
          <Header>
            <Container>
              <Link to={'/'}>{settings.site.title}</Link>
            </Container>
          </Header>
        }
        <Container>
          <Body>
            <Title>{title}</Title>
            { sub && <Sub>{sub}</Sub> }
          </Body>
        </Container>
      </Inner>
    </Hero>
  </div>
)
