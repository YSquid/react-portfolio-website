import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <div className='title'>
        <h1>Ahmad Kariem</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        </div>
        <HeaderSocials />
        <CTA />
{/* 
        <div className="me">
          <img src={ME} alt="" />
        </div> */}

      
      </div>
    </header>
  )
}

export default Header