import React from "react";
//aws
import { FaAws } from "react-icons/fa";
import { SiHeroku } from "react-icons/si";
import { SiCucumber } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
//external link
import { FiExternalLink } from "react-icons/fi";
//codeicon
import { BsCodeSlash } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { SiJest } from "react-icons/si";
//download
import { AiOutlineDownload } from "react-icons/ai";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiJquery } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { GrNode } from "react-icons/";
import { SiMongodb } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiPuppeteer } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { BiLocationPlus } from "react-icons/bi";

export class Portfolio extends React.Component {
  render() {
    const { projects } = this.props;
    console.log(projects);
    return (
      <div className="porfolio-items">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-card-container">
            <h1>{project.Title}</h1>
            <p className="project-description">{project.Description}</p>
            <p className="project-description-2">{project.Description_2}</p>
            <p className="frameworks">{project.Frameworks}</p>
            <p className="libraries">{project.Libraries}</p>
            <p className="serverless">{project.Serverless_Cloud_Provider}</p>
            <p className="test-runners">{project.Test_Runners}</p>
            <p className="architecture">{project.Architecture}</p>
            <p className="environment">{project.Environment}</p>
            <p className="database">{project.Database}</p>
            <p className="technologies">{project.Technologies}</p>
            <p className="node-middlewares">{project.Nodejs_Middlewares}</p>
            <p className="heroku-link">{project.Heroku_Deployment}</p>
            <p className="github-link">{project.Github_Repo}</p>
            <p className="live-site">{project.Live_Site}</p>
          </div>
        ))}
      </div>
    );
  }
}
