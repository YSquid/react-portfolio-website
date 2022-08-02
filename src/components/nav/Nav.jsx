import React from 'react'
import './nav.css'
import {AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineContacts} from 'react-icons/ai'
import {MdComputer} from 'react-icons/md'


const Nav = () => {
  return (
    <nav>
      <a href='#'><AiOutlineHome /></a>
      <a href='#about'><AiOutlineUser /></a>
      <a href='#experience'><AiOutlineFundProjectionScreen /></a>
      <a href='#services'><MdComputer /></a>
      <a href='#contact'><AiOutlineContacts /></a>
      

    </nav>
  )
}

export default Nav