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
const teamMembers1 = [
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
  }
]
const teamMembers2 = [
  {
    name: 'Federico Kunze',
    role: 'Co-Founder',
    avatar: '/images/avatar/avatar-federico.png',
    twitter: 'https://twitter.com/fekunze',
    linkedin: 'https://www.linkedin.com/in/fekunze/'
  },
  {
    name: 'Tony Arcieri',
    role: 'Co-Founder',
    avatar: '/images/avatar/avatar-tony.png',
    twitter: 'https://twitter.com/bascule',
    linkedin: 'https://www.linkedin.com/in/tarcieri'
  },
  {
    name: 'Lucky Odisetti',
    role: 'Product Lead',
    avatar: '/images/avatar/avatar-lucky.png',
    twitter: 'https://twitter.com/luckyOdiseti',
    linkedin: 'https://www.linkedin.com/in/lucky-odisetti-701b5437'
  },
  {
    name: 'Justin Kilpatrick',
    role: 'Co-Founder',
    avatar: '/images/avatar/avatar-justin.png',
    twitter: 'https://twitter.com/ttk314',
    linkedin: 'https://www.linkedin.com/in/kilpatrickjustin/'
  },
  {
    name: 'Deborah Simpier',
    role: 'Co-Founder',
    avatar: '/images/avatar/avatar-deborah.png',
    twitter: 'https://twitter.com/DeborahSimpier',
    linkedin: 'https://www.linkedin.com/in/deborah-simpier-a88063169/'
  },
  {
    name: 'Jehan Tremback',
    role: 'Core Developer',
    avatar: '/images/avatar/avatar-jehan.png',
    twitter: 'https://twitter.com/JTremback',
    linkedin: 'https://www.linkedin.com/in/jehantremback/'
  },
  {
    name: 'Kristi Põldsam',
    role: 'Co-Founder',
    avatar: '/images/avatar/avatar-kristi.png',
    twitter: 'https://twitter.com/kpoldsam',
    linkedin: 'https://www.linkedin.com/in/poldsam/'
  },
  {
    name: 'Shella Stephens',
    role: 'Co-Founder',
    avatar: '/images/avatar/avatar-shella.png',
    twitter: 'https://twitter.com/shella',
    linkedin: 'https://www.linkedin.com/in/shellastephens/'
  },
]
const whyData = [
  {
    img: cosmosImg,
    title: 'Cosmos Stargate SDK',
    description: 'Modular and robust protocol with Tendermint Consensus delivers world class and tested protocol layer',
  },
  {
    img: etherbridgeImg,
    title: 'Bi-Directional Ethereum Bridge',
    description: 'Automatically rebalance your portfolio when pool performance changes such that Impermanent and unrealized losses require a change in strategy',
  },
  {
    img: secureImg,
    title: 'Secure',
    description: 'Transactions are managed by the Sommelier validator set with decentralized governance. Sommelier cannot steal user funds',
  },
  {
    img: automatedImg,
    title: 'Automated',
    description: 'Automated signature management for Ethereum transactions enable automated DeFi trading for increased liquidity momentum and yield capture',
  },
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

const teamMembers3 = [...teamMembers1, ...teamMembers2]
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

export default function Main() {
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
  const carsouselWidth = teamItemWidth * teamMembers3.length
  const carsouselUsecasesWidth = windowDimensions.width * usecasesData.length

  return (
    <div className='mt-5 main-container'>
      <div className='main-top'>
        <div className='main-top__left-container'>
          <p className='text-content'>NEW</p>
          <h1 className='d-block sommelier'>
            Sommelier
          </h1>
          <h1 className='d-block cellars'>
            CELLARS
          </h1>
          <p className='sub-title mt-3'>Automated Liquidity Management<br/>for Decentralized Finance</p>
          <a href="https://app.sommelier.finance" className='launch-button' target="_blank">
            <span>Add Liquidity</span>
            <img src={coinsImg} alt='frame image' className='mr-2'/>
          </a>
        </div>
        <div className='main-top__right-container'>
          <img src={spiral2Img} alt='frame image' />
        </div>
      </div>
      <a name="features" id='features'></a>

      <div className="main-welcome" style={{ backgroundImage: `url(${welcomeBg})`, backgroundSize: 'cover' }}>
        <img src={etheriumImg} alt='frame image' />
        <h1>Welcome to Sommelier</h1>
        <h3>The new coprocessor for the Ethereum VM</h3>
        <a href='#' className='add-liquidity-button'>Add Liquidity</a>
      </div>

      <div className='main-why'>
        <h2>
          Why Sommelier <span>Cellars</span>?
        </h2>
        <div className='main-why__content'>
          <div className='main-why__content-item'>
            <h4>Liquidity Provider Management Tools</h4>
            <p>Sommelier Cellars are focused on Uniswap v3 which has high degree of capital efficiency in the Range Order structure.</p>
          </div>
          <div className='main-why__content-item'>
            <h4>Bi-Directional Ethereum Bridge</h4>
            <p>Ethereum transactions are managed by the most functional bridge optimized for extending Ethereum features for Liquidity Providers.</p>
          </div>
          <div className='main-why__content-item'>
            <h4>Data-driven management strategies</h4>
            <p>Sommelier validators leverage optimal liquidity management strategies based on blockchain transaction data and advanced price prediction models.</p>
          </div>
          <div className='main-why__content-item'>
            <h4>Non-Custodial Liquidity Oracle</h4>
            <p>Sommelier transactions are managed by the Sommelier blockchain validator set with decentralized governance. Sommelier itself does not control user funds.</p>
          </div>
        </div>
      </div>
      <a name="usecases" id='usecases'></a>
      <div className='main-usecases section-container'>
        <h2>
          Use Cases
        </h2>
        <div className='main-usecases__content'>
          <div className='main-usecases__content-item'>
            <h4>Decentralized Portfolio Management</h4>
            <p>Validator set portfolio management with full user funds control.</p>
          </div>
          <div className='main-usecases__content-item'>
            <img src={spiral1Img} />
            <h4>Compounding Fees Across AMMs and Networks</h4>
            <p>Automatically compounding fees without need for active intervention.</p>
          </div>
          <div className='main-usecases__content-item'>
            <h4>Automated Portfolio Rebalancing</h4>
            <p>Automatically rebalance portfolio to focus on high yield Liquidity Provider opportunities and exit lower yielding opportunities.</p>
          </div>
        </div>
      </div>

      <div className='main-divider'></div>
    </div>
  )
}
