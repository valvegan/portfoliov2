import React from "react";
import {PortfolioList} from './PortfolioList'

export class Portfolio extends React.Component {


    
  render() {
    const { projects } = this.props;

    return (
      <div className="list">
        {projects.map((project) => (
          <div key={project.id}>
            <PortfolioList project={project} />
          </div>
        ))}
      </div>
    );
  }
}
