import React from "react";
import { Dashboard } from "./dashboard";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export const About = () => {
  const handleOpenWindow = () => {
    window.open("https://www.linkedin.com/in/ajithkumar-m-2603b5175");
  };
  return (
    <div>
      <Dashboard />
      <div className="about-page-container">
        <p>About Us</p>
        <h2>
          Welcome to <span>Daily Color</span> , the ultimate app for fashion
          lovers! Our app is designed to help you choose the perfect colors for
          your outfit, so you can look your best for any occasion. Whether
          you're getting ready for a special event, a job interview, a date, or
          just want to upgrade your everyday style, our app is here to make your
          fashion choices easier and more confident.
        </h2>
        <p>contact Us</p>
        <h3 className="about-gmail">
          <EmailIcon /> : <label>ajithmuthu799@gmail.com</label>
        </h3>
        <h3 className="about-linkedin" onClick={handleOpenWindow}>
          <LinkedInIcon />
        </h3>
      </div>
    </div>
  );
};
