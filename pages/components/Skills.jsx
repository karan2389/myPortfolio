import React, { useState } from "react";

const Skills = () => {
  const [extraClasses,setExtraClasses] = useState('');
  return (
    <section  id="skills">
      <div className="center">
        <h2>My Skills</h2>
        <div className={extraClasses + "skills-container"}>
          <div className="skill-box">
            <img src="/images/css.webp" alt="" />
            <span>CSS</span>
          </div>
          <div className="skill-box">
            <img src="/images/html.jpg" alt="" />
            <span>HTML</span>
          </div>
          <div className="skill-box">
            <img src="/images/javascript.png" alt="" />
            <span>Javascript</span>
          </div>
          <div className="skill-box">
            <img src="/images/react.png" alt="" />
            <span>React</span>
          </div>
          <div className="skill-box">
            <img src="/images/mongodb.png" alt="" />
            <span>MongoDB</span>
          </div>
          <div className="skill-box">
            <img src="/images/firebase.png" alt="" />
            <span>Firebase</span>
          </div>
          <div className="skill-box">
            <img src="/images/git-github.png" alt="" />
            <span>Github</span>
          </div>
          <div className="skill-box">
            <img src="/images/express.png" alt="" />
            <span>Express Js</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
