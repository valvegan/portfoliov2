import React from "react";
import "./About-london-map.css";
import MyLondonMap from "./MapOfLondon";
import MapBg from "./MapBg";
import { GrMailOption } from "react-icons/gr";

export class About extends React.Component {
  render() {
    return (
      <div className="about">
        
          <div className="map-bg">
            <MapBg />
          </div><div className="london-map">
          <MyLondonMap width="100%" />
        </div>
        <div className="about-text">
          <h3>
            Hello! I am Valentina, a creative web developer based in London, UK.
          </h3>
          <p>
            Having completed my Bachelor degree in fashion design, for a few
            years I thought that meant I’d be constrained to a only a few niche
            creative roles for most of my life, but slowly I started feeling
            like my interests were changing. I got into web development when was
            looking around for ways to create a website for my own business, and
            that initial search is what led me into the world of coding, and
            then deciding to explore it! I love creating designs as well as
            developing them into real-life projects, and I have a passion for
            innovative design solutions and techniques.
          </p>

          <div className="about-text-btn">
            <button>
              <a href="mailto:valentinavaccari@hotmail.com">
                Let’s talk! <GrMailOption />
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
