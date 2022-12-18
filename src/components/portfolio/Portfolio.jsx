import React from "react";
import "./portfolio.css";
import redditThumbnail from "../../assets/redditThumbnail.png";
import mrkCBD from "../../assets/mrkCBD.png";

const data = [
  {
    id: 1,
    image: redditThumbnail,
    title: "Reddit Clone",
    github: "https://github.com/YSquid/reddit-minimal",
    site: "https://ak-reddit-minimal.netlify.app/",
    tech: ["React", "Redux", "HTML5", "CSS3", "Git/GitHub"],
  },
  {
    id: 2,
    image: mrkCBD,
    title: "CBD Brand Landing Page",
    github: "https://github.com/YSquid/mrk-landing",
    site: "https://mrkcbd.com/",
    tech: ["HTML5", "CSS3", "Git/GitHub"],
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, site, tech }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <a href={site} target="_blank" rel="norefferer">
                  <img src={image} alt={title} />
                </a>
              </div>
              <h3>{title}</h3>
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
