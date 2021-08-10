import React, {useEffect, useState} from 'react'
import ProfileNew from '../components/ProfileNew'

import "../assets/scss/main.scss"

// Carousel
// import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css'

// import loadable from '@loadable/component'

// const Carousel = loadable(() => import('@brainhubeu/react-carousel'))
// const slidesToShowPlugin = Carousel.slidesToShowPlugin

import welcomeBg from '@images/welcome.png'
import spiral1Img from '@images/spiral-1.png'
import spiral2Img from '@images/spiral-2.png'
import coinsImg from '@images/coins.png'

import photoZaki from '@images/team/zaki.png'
import photoJack from '@images/team/jack.png'
import photoKevin from '@images/team/kevin.png'
import photoTony from '@images/team/tony.png'
import photoJustin from '@images/team/justin.png'
import photoDeborah from '@images/team/deborah.png'
import photoLucky from '@images/team/lucky.png'

// Team
const teamMembers = [
  {
    name: 'Zaki Manian',
    role: 'Co-Founder',
    avatar: photoZaki,
    twitter: 'https://twitter.com/zmanian',
    linkedin: 'https://www.linkedin.com/in/zmanian'
  },
  {
    name: 'Jack Zampolin',
    role: 'Co-Founder',
    avatar: photoJack,
    twitter: 'https://twitter.com/jack_zampolin',
    linkedin: 'https://www.linkedin.com/in/jackzampolin/'
  },
  {
    name: 'Kevin Kennis',
    role: 'Co-Founder',
    avatar: photoKevin,
    twitter: 'https://twitter.com/kevinvkennis',
    linkedin: 'https://www.linkedin.com/in/kkennis/'
  },
  {
    name: 'Tony Arcieri',
    role: 'Co-Founder',
    avatar: photoTony,
    twitter: 'https://twitter.com/bascule',
    linkedin: 'https://www.linkedin.com/in/tarcieri'
  },
  {
    name: 'Justin Kilpatrick',
    role: 'Co-Founder',
    avatar: photoJustin,
    twitter: 'https://twitter.com/ttk314',
    linkedin: 'https://www.linkedin.com/in/kilpatrickjustin/'
  },
  {
    name: 'Deborah Simpier',
    role: 'Co-Founder',
    avatar: photoDeborah,
    twitter: 'https://twitter.com/DeborahSimpier',
    linkedin: 'https://www.linkedin.com/in/deborah-simpier-a88063169/'
  },
  {
    name: 'Lucky Odisetti',
    role: 'Product Lead',
    avatar: photoLucky,
    twitter: 'https://twitter.com/luckyOdiseti',
    linkedin: 'https://www.linkedin.com/in/lucky-odisetti-701b5437'
  }
]

const featuresData = [
  {
    title: 'Decentralized Portfolio Management',
    description: 'Validator set portfolio management with full user funds control.',
  },
  {
    title: 'Automated Portfolio Rebalancing ',
    description: 'Automatically rebalance portfolio to focus on high yield Liquidity Provider opportunities and exit lower yielding opportunities.',
  },
  {
    title: 'Compounding Fees Across AMMs and Networks',
    description: 'Automatically compounding fees without need for active intervention.',
  }
]

const windowGlobal = typeof window !== 'undefined' && window

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = windowGlobal;
  return {
    width,
    height
  };
}

export default function AboutUsPage() {
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    windowGlobal.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const teamItemWidth = 250

  return (
    <div className='mt-5 main-container'>
      <div className='main-what' style={{ backgroundImage: `url(${welcomeBg})`, backgroundSize: 'cover' }}>
        <div className='main-what__left'>
          <img src={spiral2Img} alt='frame image' width='100%'/>
        </div>
        <div className='main-what__middle'>
          <h1>What is Sommelier?</h1>
          <p>Sommelier is a bet that Ethereum will be a dominant player in the global economy. Sommelier consists of the Cosmos Stargate SDK, its Tendermint-based consensus layer and a decentralized, bi-directional Ethereum bridge, managed by a global network of validators.</p>
          <a href="https://app.sommelier.finance" className='launch-button' target="_blank">
            <span>Add Liquidity</span>
            <img src={coinsImg} alt='frame image' className='mr-2'/>
          </a>
        </div>
        <div className='main-what__right'>
          <img src={spiral2Img} alt='frame image' width='100%'/>
        </div>
      </div>
      <div className='main-feature section-container'>
        {featuresData.map((item, index) => (
          <div className='main-feature-item' key={`about-features-${index}`}>
            <div className='main-feature-title'>{item.title}</div>
            <div className='main-feature-description'>{item.description}</div>
          </div>
        ))}
      </div>
      <div className='main-team section-container'>
        <h2>Sommelier Team</h2>
        <div className='main-team__content'>
          {teamMembers.map((item, index) => (
            <div key={`team-profile-${index}`} className='main-team__content-member profile-container'>
              <ProfileNew data={item} /> 
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
