import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Y Squid Tech</a>
      
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://linkedin.com/in/ahmad-kariem/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/Ysquid' target='_blank' rel="noreferrer"><BsGithub /></a>
        <a href='https://twitter.com/YSquidcoding' target='_blank' rel="noreferrer"><FaTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ahmad Kariem. All rights reserved.</small>
      </div>


    </footer>
  )
}

export default Footer