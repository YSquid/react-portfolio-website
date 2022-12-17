import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ahmad Kariem</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />
{/* 
        <div className="me">
          <img src={ME} alt="" />
        </div> */}

      
      </div>
    </header>
  )
}

export default Header