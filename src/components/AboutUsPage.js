import React, {useEffect, useState} from 'react'
import Link from 'gatsby-link'
import Profile from '../components/Profile'
import {isMobileOnly} from 'react-device-detect'

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

const frameImg = '/images/Frame.png'
const etheriumImg = '/images/etherium.png'
const etheriumImg1 = '/images/etherium-1.png'
const etheriumMobileImg = '/images/img-ether-mobile.png'
const cosmosImg = '/images/cosmos.png'
const etherbridgeImg = '/images/ether-bridge.png'
const secureImg = '/images/secure.png'
const automatedImg = '/images/automated.png'
// Use Cases
const imperImg = '/images/impermanent.png'
const rebalancingImg = '/images/rebalancing.png'
const lowerImg = '/images/lower-ether.png'
const greaterImg = '/images/greater.png'
// Roadmap
const stickImg = '/images/roadmap-stick1.png'
const stickMobileImg = '/images/roadmap-stick-mobile.png'
// About
const aboutImg = '/images/img-about1.png'
// Team
const teamMembers = [
  {
    name: 'Zaki Manian',
    role: 'Co-Founder',
    avatar: '/images/avatar/avatar-zaki.png',
    twitter: 'https://twitter.com/zmanian',
    linkedin: 'https://www.linkedin.com/in/zmanian'
  },
  {
    name: 'Jack Zampolin',
    role: 'Co-Founder',
    avatar: '/images/avatar/avatar-jack.png',
    twitter: 'https://twitter.com/jack_zampolin',
    linkedin: 'https://www.linkedin.com/in/jackzampolin/'
  },
  {
    name: 'Kevin Kennis',
    role: 'Co-Founder',
    avatar: '/images/avatar/avatar-kevin.png',
    twitter: 'https://twitter.com/kevinvkennis',
    linkedin: 'https://www.linkedin.com/in/kkennis/'
  },
  // {
  //   name: 'Tony Arcieri',
  //   role: 'Co-Founder',
  //   avatar: '/images/avatar/avatar-tony.png',
  //   twitter: 'https://twitter.com/bascule',
  //   linkedin: 'https://www.linkedin.com/in/tarcieri'
  // },
  // {
  //   name: 'Justin Kilpatrick',
  //   role: 'Co-Founder',
  //   avatar: '/images/avatar/avatar-justin.png',
  //   twitter: 'https://twitter.com/ttk314',
  //   linkedin: 'https://www.linkedin.com/in/kilpatrickjustin/'
  // },
  // {
  //   name: 'Deborah Simpier',
  //   role: 'Co-Founder',
  //   avatar: '/images/avatar/avatar-deborah.png',
  //   twitter: 'https://twitter.com/DeborahSimpier',
  //   linkedin: 'https://www.linkedin.com/in/deborah-simpier-a88063169/'
  // },
  // {
  //   name: 'Lucky Odisetti',
  //   role: 'Product Lead',
  //   avatar: '/images/avatar/avatar-lucky.png',
  //   twitter: 'https://twitter.com/luckyOdiseti',
  //   linkedin: 'https://www.linkedin.com/in/lucky-odisetti-701b5437'
  // }
]

const usecasesData = [
  {
    img: imperImg,
    title: 'Impermanent Loss Protection',
    description: 'Automatically rebalance your portfolio when pool performance changes such that Impermanent and unrealized losses require a change in strategy',
  },
  {
    img: rebalancingImg,
    title: 'Automated Portfolio Rebalancing',
    description: 'Automatically rebalance portfolio to focus on high yield Liquidity Provider opportunities and exit lower yielding opportunities',
  },
  {
    img: lowerImg,
    title: 'Lower Ethereum Gas Transaction Fees',
    description: 'Aggregating and batching transactions with Sommelier will yield lower gas prices for LP growing demand to manage pool position and performance',
  },
  {
    img: greaterImg,
    title: 'Greater Liquidity Momentum',
    description: 'Native transaction batching and roll-ups deliver greater liquidity momentum to capture onchain yield on the Ethereum blockchain',
  },
]

// Investors
const cygnilabsImg = '/images/investors/ico-cygnilabs.png'
const standardImg = '/images/investors/ico-standard.png'
const multicoinImg = '/images/investors/ico-multicoin.png'
const alamedaImg = '/images/investors/ico-alameda.png'

const sliderSettings = {
  dots: true,
  duration: 100,
  dots: false,
  centerMode: true
}

setTimeout(function(){
  var href = window.location.href;
  const facebook_url = 'https://www.facebook.com/sharer/sharer.php?u=' + href;
  const linkedin_url = 'https://www.linkedin.com/shareArticle?mini=true&url=' + href;
  const twitter_url = 'http://twitter.com/share?url='+ href;

  const fb = document.getElementById('facebook')


  if (fb) {
    document.getElementById('facebook').setAttribute("href", facebook_url);
    document.getElementById('linkedin').setAttribute("href", linkedin_url);
    document.getElementById('twitter').setAttribute("href", twitter_url);
  }
}, 1500);

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
          <img src={spiral2Img} alt='frame image' />
        </div>
        <div className='main-what__middle'>
          <h1>What is Sommelier?</h1>
          <p>Sommelier is a bet that Ethereum will be a dominant player in the global economy. Sommelier consists of the Cosmos Stargate SDK, its Tendermint-based consensus layer and a decentralized, bi-directional Ethereum bridge, managed by a global network of validators.</p>
        </div>
        <div className='main-what__right'>
          <img src={spiral2Img} alt='frame image' />
        </div>
      </div>
      <div className='main-team section-container'>
        <h2>Sommelier Team</h2>
        <div className='main-team__top'>
          {teamMembers && (
            <ul>
              {teamMembers.map((item, index) => (
                <li>
                  <Profile data={item} isPortrait={true} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
