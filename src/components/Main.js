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

const etheriumImg = '/images/etherium.png'

// Use Cases
const imperImg = '/images/impermanent.png'
const rebalancingImg = '/images/rebalancing.png'
const lowerImg = '/images/lower-ether.png'
const greaterImg = '/images/greater.png'

const whyData = [
  {
    title: 'Liquidity Provider Management Tools',
    description: 'Sommelier Cellars are focused on Uniswap v3 which has high degree of capital efficiency in the Range Order structure.',
  },
  {
    title: 'Bi-Directional Ethereum Bridge',
    description: 'Ethereum transactions are managed by the most functional bridge optimized for extending Ethereum features for Liquidity Providers.',
  },
  {
    title: 'Data Driven Strategies',
    description: 'Sommelier validators leverage optimal liquidity management strategies based on blockchain transaction data and advanced price prediction models.',
  },
  {
    title: 'Non-Custodial Liquidity Oracle',
    description: 'Sommelier transactions are managed by the Sommelier blockchain validator set with decentralized governance. Sommelier itself does not control user funds.',
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

  return (
    <div className='mt-5 main-container'>
      <div className='main-top'>
        <div className='main-top__left-container'>
          <p className='text-content'>NEW</p>
          <h1 className='d-block sommelier'>
            Sommelier
          </h1>
          <h1 className='d-block cellars'>
            Cellars
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
          {whyData.map((data, index) => (
            <div className='main-why__content-item' key={`why-title-${index}`}>
              <h4>{data.title}</h4>
            </div>
          ))}
        </div>
        <div className='main-why__content'>
          {whyData.map((data, index) => (
            <div className='main-why__content-item' key={`why-description-${index}`}>
              <p>{data.description}</p>
            </div>
          ))}
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
