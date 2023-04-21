import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  return (
    <section id="contact">
      <div>
        <div className="center">
          <h2>Contact Me!</h2>
          <div className="box">
            <EmailIcon className="contactIcons" />
            <span>karansutar03@gmail.com</span>
          </div>
          <div className="box">
            <CallIcon className="contactIcons" />
            <span> 9372519751 </span>
          </div> <br />
          <div className="box">
            <LocationOnIcon className="contactIcons" />
            <span>Rajasthan, India.</span>
          </div>
          <div className="box">
            <GitHubIcon className="contactIcons" />
            <span>karan2389</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
