import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Ahmad Kariem</a>
      
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://linkedin.com/in/ahmad-kariem/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/Ysquid' target='_blank' rel="noreferrer"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ahmad Kariem. All rights reserved.</small>
      </div>


    </footer>
  )
}

export default Footer