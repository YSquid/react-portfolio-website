import React from "react";
import "./portfolio.css";
import redditClone from '../../assets/redditClient.png'
import mrkCBD from '../../assets/mrkCBD.png'

const data = [
  {
    id: 1,
    image: redditClone,
    title: 'Item1',
    github: 'https://github.com/Ysquid',
    demo: 'https://dribbble.com'

  },
  {
    id: 2,
    image: mrkCBD,
    title: 'Item2',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Portfolio</h5>

      <div className="container portfolio__container">

        {
          
          data.map(({id, image, title, github, demo}) =>{
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
              <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank">
              GitHub
              </a>
              <a
              href={demo}
              className="btn btn-primary"
              target="_blank"
              >
              Live Demo
              </a>
            </div>
            </article>
            )

          })



        }
       
      </div>
    </section>
  );
};

export default Portfolio;


