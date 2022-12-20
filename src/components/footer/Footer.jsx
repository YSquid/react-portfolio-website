import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <h2>Ahmad Kariem</h2>

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