import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import { BsDiagram3Fill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { RiFolderChartFill } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <div id="about-spacer"></div>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__bio">
            <p>Hi, I'm Ahmad.</p> <br></br>
            <p>
              I am a 100% self taught full stack developer from Saskatoon
              Sasktchewan. After several years of professional experience
              working in areas such as tech sales, marketing, and data analysis,
              I decided to pursue a field that has always interested me -
              computer programming.{" "}
            </p>
            <br></br>
            <p>
              In March of 2022 I started learning programming in my spare time.
              In September of 2022 I began dedicating myself full-time to
              learning full-stack web development.
            </p>
            <br></br>
            <p>
              My ultimate goal is to become a full-time professional developer.
              I am open to in-person roles across Canada as well as remote
              positions.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
