import React from "react";
import myIllustration from "./images/meillustration.svg";
import { Link } from "react-router-dom";
import { BsCodeSlash } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";

export function Home() {
  return (
    <div className="profile">
      <div className="profile-portrait">
        <img src={myIllustration} alt="illustration" />
      </div>
      <div className="profile-info">
        <div className="profile-info-initial">
          {" "}
          <h2>Hi, my name is </h2>
        </div>
        <div className="name">
          {" "}
          <h1>Valentina</h1>
          <h1>Vaccari</h1>
        </div>
        <div className="profile-info-last">
          <h2>I'm a Web developer!</h2>
          <h3>
            <ImLocation2 />
            based in London, UK
          </h3>
          <Link to={`/portfolio`}>
            <button>
              <BsCodeSlash /> Portfolio <BsCodeSlash />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
