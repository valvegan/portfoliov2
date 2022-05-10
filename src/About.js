import React from "react";
import "./About-london-map.css";
import  MyLondonMap  from "./MapOfLondon";

export class About extends React.Component {
  render() {
    return (
      <div className="map-container">
       
          <MyLondonMap width="100%"/>

  

        
        
        <p>Im about</p>
      </div>
    );
  }
}
