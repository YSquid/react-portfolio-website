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
                <h4>PostgreSQL</h4>
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
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>VSCode</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>Chrome Dev Tools</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>Node Package Manager</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>Postman</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <h4>Excel/Google Sheets</h4>
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
                <h4>Researching and Implementing Software</h4>
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
            <article className="experience__details">
              <div>
                <h4>Recruiting and Hiring</h4>
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
