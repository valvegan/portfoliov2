import React from "react";
import myIllustration from "./images/meillustration.svg";
import { Link } from "react-router-dom";
import { BsCodeSlash } from "react-icons/bs";

export function Home() {
  return (
    <div className="profile">
      <div className="profile-portrait">
        <img src={myIllustration} alt="illustration" />
      </div>
      <div className="profile-info">
     <div className="profile-info-initial"> <h2><span><BsCodeSlash/></span>Hi, my name is </h2>
       
       <div className="name"> <h1>
          Valentina</h1><h1>
          Vaccari</h1></div></div>
        <div className="profile-info-last">
        <h2>I'm a Web developer!<span><BsCodeSlash/></span></h2>
        <h3>
          based in London, UK <br />{" "}
        </h3>
        <Link to={`/portfolio`}>
          <li>Portfolio</li>
        </Link>
      </div></div>
    </div>
  );
}
