import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>Redux</h4>
              </div>
            </article>
          </div>
        </div>
        {/*END OF FRONTEND*/}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <h4>Node.js</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>Express.js</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>PHP</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>PostgreSQL/MySQL</h4>
              </div>
            </article>
          </div>
        </div>
        {/* END OF BACKEND */}
        
        <div className="other_tools">
          <h3>Data Analytics</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>SQL</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>Excel</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>Power BI</h4>
              </div>
            </article>
          </div>
        </div>
      {/* END OF OTHER TOOLS */}
        <div className="professional__skills">
          <h3>Professional Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <h4>Complex Problem Solving</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>Public Speaking</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>Sales and Customer Service</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>Project and People Management</h4>
              </div>
            </article>
          </div>
        </div>

        {/* END OF PROFESSIONAL SKILLS */}
      </div>
    </section>
  );
};

export default Experience;
