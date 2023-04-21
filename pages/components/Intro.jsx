import React, { useEffect, useState } from "react";

const Intro = () => {
  const [classes, setClasses] = useState("");
  
  useEffect(()=> {
    setClasses("visible")
  }, [])

  return (
    <div>
      <section id="intro" className={classes}>
        <div className="left">
          <p>
            {" "}
            I am <span> Karan Sutar. </span> <br />{" "}
            <b>
              Full Stack Javascript Developer <br /> and Video Editor
            </b>
          </p>
          <a href="">Contact Me</a>
        </div>
        <div className="right">
          <img src="/images/karan3.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Intro;
