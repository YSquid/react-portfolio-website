import React from "react";
import "./portfolio.css";
import redditThumbnail from "../../assets/redditThumbnail.png";
import mrkCBD from "../../assets/mrkCBD.png";
import quoteMachine from '../../assets/quoteMachine.png'
import appointmentPlanner from '../../assets/appointmentPlanner.png'
import ahmadsEats from '../../assets/ahmadsEats.png'
import FinancialReport from '../../assets/Financial-Report.zip'
import salesData from '../../assets/sales-data.png'

const dataProjects = [
  {
    id: 'dp-ex1',
    image: salesData,
    type: 'powerBI',
    title: "Sales Data Analysis",
    preview: "https://github.com/YSquid/ecomm-client",
    report: FinancialReport,
    description: "Analysis of example sales data provided by Microsoft. Data was imported, visualized, and analyzed in Power BI. An accompanying PowerPoint presentation summarizes the data and provides recommendations based on the analysis.",
    tech: ["PowerBI", "Excel", "PowerPoint"],
  },
]

const webProjects = [
  {
    id: 'wd-eats',
    image: ahmadsEats,
    title: "E-commerce Store",
    github: "https://github.com/YSquid/ecomm-client",
    site: "https://ahmads-eats.netlify.app/",
    description: "A mock e-commerce store. Features - user registration/authentication, placing orders, and viewing order history.",
    tech: ["React", "Node.js", "Express.js", "PostgreSQL", "HTML5", "CSS3", "Git/GitHub"],
  },

  {
    id: 'wd-reddit',
    image: redditThumbnail,
    title: "Reddit Clone",
    github: "https://github.com/YSquid/reddit-minimal",
    site: "https://ak-reddit-minimal.netlify.app/",
    description: "A basic functionality Reddit clone built with React and Redux. Utilizes the Reddit JSON API to fetch data from Reddit.",
    tech: ["React", "Redux", "HTML5", "CSS3", "Git/GitHub", "Google Analytics"],
  },
  {
    id: 'wd-quote',
    image: quoteMachine,
    title: "Random Quote Machine",
    github: "https://github.com/YSquid/react-quote-machine",
    site: "https://ak-react-quotes.netlify.app/",
    description: "A web app that fetches random quotes with the option to tweet the quote in one click.",
    tech: ["React", "Bootstrap", "HTML5", "CSS3", "Git/GitHub"],
  },
  {
    id: 'wd-appt',
    image: appointmentPlanner,
    title: "React Appointment Planner",
    github: "https://github.com/YSquid/react-appointment-planner-challenge",
    site: "https://ak-appointment-planner.netlify.app/",
    description: "An appointment planning browser app built with React",
    tech: ["React", "HTML5", "CSS3", "Git/GitHub"],
  },
  {
    id: 'wd-cbd',
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

      <h3>Data Projects</h3>
      <div className="container portfolio__container data__projects">
        {dataProjects.map(({ id, type, image, title, preview ,report, description, tech }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
               
                  <img src={image} alt={title} />
                
              </div>
              <h3>{title}</h3>
              <p className="project__description">{description} {type === "powerBI" ? <p>Note: PowerBI license required to view Power BI report</p> : null}</p>
              <ul className="tech">
                {tech.map((elem) => {
                  return <li className="tech__item">{elem}</li>;
                })}
              </ul>
              <div className="portfolio__item-cta">
                <a
                  href={report}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Files
                </a>
              </div>
            </article>
          );
        })}
      </div>
      
      <h3>Web Development Projects</h3>
      <div className="container portfolio__container web__projects">
        {webProjects.map(({ id, image, title, github, site, description, tech }) => {
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
