import React from "react";
import "./portfolio.css";
import redditThumbnail from "../../assets/redditThumbnail.png";
import mrkCBD from "../../assets/mrkCBD.png";
import quoteMachine from '../../assets/quoteMachine.png'
import appointmentPlanner from '../../assets/appointmentPlanner.png'

const data = [
  {
    id: 1,
    image: redditThumbnail,
    title: "Reddit Clone",
    github: "https://github.com/YSquid/reddit-minimal",
    site: "https://ak-reddit-minimal.netlify.app/",
    description: "A basic functionality Reddit clone built with React and Redux. Utilizes the Reddit JSON API to fetch data from Reddit.",
    tech: ["React", "Redux", "HTML5", "CSS3", "Git/GitHub", "Google Analytics"],
  },
  {
    id: 2,
    image: quoteMachine,
    title: "Random Quote Machine",
    github: "https://github.com/YSquid/react-quote-machine",
    site: "https://ak-react-quotes.netlify.app/",
    description: "A web app that fetches random quotes with the option to tweet the quote in one click.",
    tech: ["React", "Bootstrap", "HTML5", "CSS3", "Git/GitHub"],
  },
  {
    id: 3,
    image: appointmentPlanner,
    title: "React Appointment Planner",
    github: "https://github.com/YSquid/react-appointment-planner-challenge",
    site: "https://ak-appointment-planner.netlify.app/",
    description: "An appointment planning browser app built with React",
    tech: ["React", "HTML5", "CSS3", "Git/GitHub"],
  },
  {
    id: 4,
    image: mrkCBD,
    title: "CBD Brand Landing Page",
    github: "https://github.com/YSquid/mrk-landing",
    site: "https://mrkcbd.com/",
    description: "A one page site built with HTML and CSS for a CBD brand.",
    tech: ["HTML5", "CSS3", "Git/GitHub", "Google Analytics"],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, site, description, tech }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <a href={site} target="_blank" rel="noreferrer">
                  <img src={image} alt={title} />
                </a>
              </div>
              <h3>{title}</h3>
              <p className="project__description">{description}</p>
              <ul className="tech">
                {tech.map((elem) => {
                  return <li className="tech__item">{elem}</li>;
                })}
              </ul>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={site}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Site
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
