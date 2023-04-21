import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => {
  return (
    <div>
      <main>
        <header>
          {" "}
          <img className="headerImg" src="/images/logo2.jpg" alt="" />{" "}
          <nav className="headerLinks">
            <a href="#about">About</a>
            <a href="#portfolio">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="social">
            <a href="">
              <InstagramIcon />
            </a>
            <a href="">
              <LinkedInIcon />
            </a>
          </div>
        </header>
      </main>
    </div>
  );
};

export default Header;
