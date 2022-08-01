import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href='https://linkedin.com/in/ahmad-kariem/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/Ysquid' target='_blank' rel="noreferrer"><BsGithub /></a>
        <a href='https://twitter.com/YSquidcoding' target='_blank' rel="noreferrer"><FaTwitter/></a>
    </div>

  )
}

export default HeaderSocials