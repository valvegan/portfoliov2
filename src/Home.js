import React from "react";
import myIllustration from "./images/meillustration.svg";

export function Home(){
    return(
        <div className="profile">
        <div className="profile__portrait">
          <img src={myIllustration} alt="profile__portrait" />
        </div>
        <div className="profile__info">
          <h1>
            Valentina<br />
            Vaccari
          </h1>
          <h2>Web developer</h2>
          <h3>
            based in London, UK. <br />
            Check out some of my projects
            <a href="work.html" className="button">Here</a>
          </h3>
        </div>
      </div> 
    )
}