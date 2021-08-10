import React from "react"
import styled, { css } from 'styled-components'

import twIcon from '@images/social/twitter-white.png'
import liIcon from '@images/social/linkedin-white.png'

const Container = styled.div`
  padding: 0 1.875rem;
  margin-bottom: 46px;

  text-align: center;
  .img-avatar {
    max-width: 10.75rem;
  }
  h5 {
    font-family: Barlow;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 43px;
    letter-spacing: 0em;
    text-align: center;
  }
  h4 {
    font-family: Lato;
    font-size: 26px;
    font-style: normal;
    font-weight: 800;
    line-height: 39px;
    letter-spacing: -0.01em;
    text-align: center;
    background: -webkit-linear-gradient(269.95deg, #E323FF 0.02%, #7517F8 97.45%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .caption-container {
    div {
      justify-content: center;
      margin-top: 1.875rem;
      img {
        margin-left: 0.9rem;
        margin-right: 0.9rem;
        width: 36px;
        height: 36px; 
      }
    }
  }
`

const ProfileNew = ({ data }) => {
  return (
    <Container className='profile-container'>
      <img src={data.avatar} className='img-avatar' width='172' />
      <div className='caption-container'>
        <h5>{data.name}</h5>
        <h4>Co-Founder</h4>
        <div>
          <a href={data.twitter} target="_blank"><img src={twIcon} /></a>
          <a href={data.linkedin} target="_blank"><img src={liIcon} /></a>
        </div>
      </div>
    </Container>
  )
}

export default ProfileNew
