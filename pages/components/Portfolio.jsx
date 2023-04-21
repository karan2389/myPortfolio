import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="center">
        <h2>Projects</h2>
        <div className="portfolio-container">
          <a href="https://cool-empanada-e7d70a.netlify.app">
            <img src="/images/myblogs.png" alt="" />
            <p className="portDesc">
               This a simple blogging app. Where users can register themselves and then post some good blogs.
               I have uploaded some interesting car related blogs also.
            </p>
          </a>
          <a href="https://super-cobbler-090d84.netlify.app">
            <img src="/images/istore.png" alt="" />
            <p className="portDesc">
              This an ecommerce website which has many features and I am going to add a payment gateway further in it.
            </p>
          </a>
          <a href="https://loquacious-centaur-ccb2c0.netlify.app">
            <img src="/images/fastfood.png" alt="" />
            <p className="portDesc">
              This is also an ecommerce website for a restaurant and it also has some great features.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
