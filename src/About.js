import React from "react";
import "./About-london-map.css";
import  MyLondonMap  from "./MapOfLondon";

export class About extends React.Component {
  render() {
    return (
      <div className="map-container">
       
       <MyLondonMap width="100%"/>

          <h1>About me</h1>
        <h3>Hello! I am Valentina, a creative web developer based in London, UK.</h3>
        <p>
            Having completed my Bachelor degree in fashion design, for a few years I thought that meant I’d be constrained
            to a only
            a few niche creative roles for most of my life, but slowly I started feeling like my interests were changing.
         
            I got into web development when was looking around for ways to create a website for my own business, and that
            initial
            search is what led me into the world of coding, and deciding to explore it!
            
            I love creating designs as well as developing them into real-life projects, and I have a passion for innovative
            design
            solutions and techniques.
            <a href="contact_valentina.html" className="button button__secondary">Let’s talk!</a>
        </p>

        
        
        <p>Im about</p>
        
      </div>
    );
  }
}
