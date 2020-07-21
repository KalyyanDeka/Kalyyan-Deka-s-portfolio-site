import React from "react";
import "./Header.scss";

const header = () => {
  return (
    <div className="header">
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-start">Hi, my name is . . .</span>
          <span className="heading-primary-main">Kalyyan Deka.</span>
          <span className="heading-primary-sub">Full Stack Developer</span>
        </h1>
      </div>
      <div className="mail-button">
        <a
          href="mailto:kalyyan.2612@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-mail"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
};

export default header;
