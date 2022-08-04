import React from 'react'
import './about.css'
import ME from '../../assets/about-me-avatar.png'

const About = () => {
  return (
  <section id="about">
    <h5>Get To Know</h5>
    <h2>About me</h2>

    <div className="contaier about__container"></div>
      <div className="about__me">
        <div className="about__me__image">
          <img src={ME}alt="About Me" />
        </div>
      </div>

      <div className="about__content">
      <div className="about__cards">
        <article className="about__card">
          <h5>Experience</h5>
          <small>1 year</small>
        </article>


      </div>

      </div>
    </section>
  )
}

export default About