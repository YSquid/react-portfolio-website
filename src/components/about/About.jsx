import React from 'react'
import './about.css'
import ME from '../../assets/about-me-avatar.png'
import {BsDiagram3Fill} from 'react-icons/bs'
import {FaUserFriends} from 'react-icons/fa'
import {RiFolderChartFill} from 'react-icons/ri'

const About = () => {
  return (
  <section id="about">
    <h5>Get To Know</h5>
    <h2>About me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me__image">
          <img src={ME}alt="About Me" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <BsDiagram3Fill className='about__icon'/>
            <h5>Experience</h5>
            <small>1 year</small>
          </article>

          <article className="about__card">
            <FaUserFriends className='about__icon' />
            <h5>Clients</h5>
            <small>Across Canada & U.S.</small>
          </article>

          <article className="about__card">
            <RiFolderChartFill className='about__icon' />
            <h5>Projects</h5>
            <small>10+ websites</small>
          </article>

        <p>I am a self taught developer with 1 year experience building custom websites.</p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    </div>
    </section>
  )
}

export default About