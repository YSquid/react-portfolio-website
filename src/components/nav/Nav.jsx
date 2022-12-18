import React from 'react'
import './nav.css'
import {AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineContacts} from 'react-icons/ai'
import {MdComputer} from 'react-icons/md'
import {useState} from 'react'


const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')



  return (
    <nav>
      <a href='#header' onClick={() => {setActiveNav('#header')}} className={activeNav === '#header' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => {setActiveNav('#about')}} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={() => {setActiveNav('#experience')}} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineFundProjectionScreen /></a>
      <a href='#portfolio' onClick={() => {setActiveNav('#services')}} className={activeNav === '#services' ? 'active' : ''}><MdComputer /></a>
      <a href='#contact' onClick={() => {setActiveNav('#contact')}} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineContacts /></a>
    </nav>
  )
}

export default Nav