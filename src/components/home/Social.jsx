import React from "react";
import "./social.css";
const Social = () => {
  return (
    <div className="home__social">
      <a href="https://www.linkedin.com/in/jaswant-singh-rajpurohit-6a24a8205/" className="home__social-icon" target="_">
      <i class='bx bxl-linkedin' ></i>
      </a>

      <a href="https://twitter.com/Sjaswant55" className="home__social-icon" target="_">
        <i class="uil uil-twitter"></i>
      </a>

      <a href="https://github.com/Sjaswant55" className="home__social-icon" target="_">
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
