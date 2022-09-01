import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Item1',
    github: 'https://github.com/Ysquid',
    demo: 'https://dribbble.com'

  },
  {
    id: 2,
    image: IMG2,
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


