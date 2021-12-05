import React from "react";
import "./Info.css";
import Image from "../assets/github-logo.png";
import Image3 from "../assets/blog-icon.png";

const Info = () => {
  return (
    <div className="infoContainer">
      <a class="link" href="https://github.com/prince-ao">
        <img src={Image} alt="github logo" width={54} />
      </a>
      <p>Email: princeaddo608@gmail.com</p>
      <a class="link2" href="https://prince-ao.github.io/blog/">
        <img src={Image3} alt="blog icon" width={54} />
      </a>
    </div>
  );
};

export default Info;
