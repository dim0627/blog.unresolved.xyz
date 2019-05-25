import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import variables from '../variables'

const Share = styled.div`
  display: flex;
  margin: 1.5rem -.5rem;

  @media screen and (max-width: 767px) {
    display: block;
  }
`

const Item = styled.div`
  padding: 0 .5rem;
  flex-grow: 1;

  @media screen and (max-width: 767px) {
    margin: 1rem 0;
  }

  a {
    display: block;
    padding: 1rem;
    border-radius: 4px;
    color: #fff;
    font-weight: 700;
    text-align: center;
    letter-spacing: 4px;
  }

  .ht {
    background: linear-gradient(90deg, #008fde, #2cb4ff);
    box-shadow: 0 8px 48px -8px #008fde;
  }

  .fb {
    background: linear-gradient(90deg, #3b5998, #5f7ec1);
    box-shadow: 0 8px 48px -8px #3b5998;
  }

  .tw {
    background: linear-gradient(90deg, #1da1f2, #65bff6);
    box-shadow: 0 8px 48px -8px #1da1f2;
  }
`

export default ({ url, title }) => (
  <Share>
    <Item>
      <a className='ht' href={`http://b.hatena.ne.jp/add?mode=confirm&url=${url}&title=${title}`} target='_blank' rel='nofollow'>Hatena</a>
    </Item>
    <Item>
      <a className='tw' href={`http://twitter.com/intent/tweet?url=${url}&text=${title}&tw_p=tweetbutton`} target='_blank' rel='nofollow'>Twitter</a>
    </Item>
    <Item>
      <a className='fb' href={`http://www.facebook.com/sharer.php?u=${url}&t=${title}`} target='_blank' rel='nofollow'>Facebook</a>
    </Item>
  </Share>
)
