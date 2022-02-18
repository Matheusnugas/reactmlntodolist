import React from "react";
import "./Footer.css";
import githubIcon from "../images/github.png";
import linkedinLogo from "../images/linkedin.png";

function Footer() {
  return (
    <footer>
      <p>
        Code by{" "}
        <span>
          <a href="https://matheusnugasdev.vercel.app/">Matheus Luz Nugas</a>
        </span>
      </p>
      <a href="https://github.com/Matheusnugas">
        <img src={githubIcon} alt="githubIcon" />
      </a>
      <a href="https://www.linkedin.com/in/matheusluznugas/">
        <img src={linkedinLogo} alt="githubIcon" />
      </a>
    </footer>
  );
}

export default Footer;
