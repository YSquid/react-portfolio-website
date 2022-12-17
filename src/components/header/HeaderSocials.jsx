import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href='https://github.com/Ysquid' target='_blank' rel="noreferrer"><BsGithub /></a>
        <a href='https://linkedin.com/in/ahmad-kariem/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
    </div>

  )
}

export default HeaderSocials