import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";


const About = () => {
  return (
    <section id="about">
      <div id="about-spacer"></div>
      <h2>About me{process.env.REACT_APP_UA}</h2>

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
              I am a web developer and data analyst from Saskatoon SK. {" "}
            </p>
            <br></br>
            <p>
              I have several years of professional experience in the areas of data analysis, sales, and marketing. Currently, I am adding web development skills to my arsenal and adding new skills to my data analytics toolkit.
            </p>
            <br></br>
            <p>
              I am open to roles in areas such as web development, data analytics/engineering, or similar. I'm always open for a quick coffee chat - feel free to send me a message!
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
