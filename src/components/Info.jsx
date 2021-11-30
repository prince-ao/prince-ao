import React, { useState } from "react";
import "./Info.css";
import Image from "../assets/github-logo.png";
import Image2 from "../assets/github-logo2.png";

const Info = () => {
  const [imgHover, setImageHover] = useState(false);
  return (
    <div className="infoContainer">
      <a class="link" href="https://github.com/prince-ao">
        <img
          src={imgHover ? Image2 : Image}
          alt="github logo"
          width={54}
          onPointerOver={() => setImageHover(true)}
          onPointerLeave={() => setImageHover(false)}
        />
      </a>
      <p>Email: princeaddo608@gmail.com</p>
    </div>
  );
};

export default Info;
