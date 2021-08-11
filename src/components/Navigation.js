import Link from 'gatsby-link'
import React from 'react'
import SbEditable from 'storyblok-react'
import {isMobileOnly} from 'react-device-detect'

import logoImg from '@images/logo.png'

const Nav = ({ settings, lang, pathname }) => {
  const [showMenu, setShowMenu] = React.useState(!isMobileOnly)

  const showAlert = () => {
      alert("I'm an alert");
    }

  const handleHamburger = () => {
    setShowMenu(!showMenu)
  }

  const handleMoveToSection = (e, msgId) => {
    if (pathname === '/') { // Only apply to home page
      e.preventDefault();
      const ref = document.querySelector(`#${msgId}`);
      if (ref) {
        ref.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }

  return (
    <header className='container-fluid'>
      <nav className='' role='navigation'>
        <div className='nav-container d-flex container'>
          <div className='text-primary nav-container__title'>
            <button onClick={handleHamburger} className='d-block d-sm-none'>
              <img src='/images/button-hamburger.png' width='24' />
            </button>
            <Link to='/'>
              <img src={logoImg} />
              {/* <p className='nav-title m-0'>SOMMELIER</p> */}
            </Link>

          </div>
          {showMenu && (
            <div className='flex-grow-1 nav-container__menu-container'>
              <ul className='ml-auto'>

                <li key={1} >
                  <a href='/#features' onClick={(e) => handleMoveToSection(e, 'features')} className='nav-menu-item'>Features</a>
                </li>

                <li key={2} >
                  <a href='/#usecases' onClick={(e) => handleMoveToSection(e, 'usecases')} className='nav-menu-item'>Use Cases</a>
                </li>

                <li key={3} >
                  <a href='/about-us' className='nav-menu-item'>About</a>
                </li>

                <li key={4} >
                  <Link to={`https://t.me/getsomm`} className='nav-menu-item' target='new'>
                    {`Community`}
                  </Link>
                </li>

                <li key={5} >
                  <Link to={`/blog/`} className='nav-menu-item'>
                    {`Blog`}
                  </Link>
                </li>
                {/* <li key={6} >
                  <Link to={`/resources/`} className='nav-menu-item'>
                    {`Resource`}
                  </Link>
                </li> */}

                <li key={999} className='d-flex align-items-center launch-button-inverse'>
                  <a href="" className='nav-menu-item nav-menu-item--launch' target="_blank">
                    Add Liquidity
                  </a>
                </li>
              </ul>
            </div>

          )}
        </div>
      </nav>
    </header>
  )
};

export default Nav;
