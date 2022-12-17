import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

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
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>Redux</h4>
                <small className="text-light">Intermediate</small>
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
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>Express.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF BACKEND */}
        
        <div className="other_tools">
          <h3>Other Tools</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <h4>Git/GitHub</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>VSCode</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>Chrome Dev Tools</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>Node Package Manager</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>Postman</h4>
                <small className="text-light">Introductory</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>Excel/Google Sheets</h4>
                <small className="text-light">Experienced</small>
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
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>Researching and Implementing Software</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>Public Speaking</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>Sales and Customer Service</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>Project and People Management</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>Recruiting and Hiring</h4>
                <small className="text-light">Intermediate</small>
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
