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
import { GrNode } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiPuppeteer } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { BiLocationPlus } from "react-icons/bi";
import { SiPostgresql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPassport } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

export class PortfolioList extends React.Component {
  //find the index of matching icon and then render the icon
  getIndices(values, targets) {
    let value = values.map((v) => v.toLowerCase().slice(0, v.indexOf(" ")));
    let target = targets.map((t) => t.substring(2).toLowerCase());
    return value.map((s) => target.findIndex((t) => t.includes(s)));
  }

  getIndicesReverse(values, targets) {
    let value = values.map((v) => v.toLowerCase().slice(0, v.indexOf(" ")));
    let target = targets.map((t) => t.substring(2).toLowerCase());
    return value.map((s) => target.findIndex((t) => s.includes(t)));
  }

  render() {
    const { project } = this.props;

    let icons = [
      <FaReact />,
      <FaAws />,
      <SiPostman />,
      <SiPuppeteer />,
      <SiRedux />,
      <SiMongodb />,
      <GrNode />,
      <IoLogoJavascript />,
      <SiJquery />,
      <AiOutlineHtml5 />,
      <SiJest />,
      <DiSass />,
      <DiCss3 />,
      <BsFillBootstrapFill />,
      <SiCucumber />,
      <SiHeroku />,
      <SiPostgresql />,
      <SiExpress />,
      <SiPassport />,
      <BsGithub />,
      <FiExternalLink />,
    ];
    let iconsNames = icons.map((i) => i.type.name);

    return (
      <div className="porfolio-items">
        <div key={project.id} className="portfolio-card-container">
          <h1>{project.Title}</h1>
          <p className="project-description">{project.Description}</p>
          <p className="project-description-2">{project.Description_2}</p>

          {project.Frameworks && (
            <div className="icons-container">
              <h3>Frameworks</h3>
              <ul>
                {this.getIndices(project.Frameworks, iconsNames).map(
                  (i) =>
                    i > -1 && (
                      <li className="icon" key={i}>
                        {icons[i]}
                      </li>
                    )
                )}
              </ul>
              <ul>
                {project.Frameworks.map((t) => (
                  <li className="icon-text" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.Libraries && (
            <div className="icons-container">
              <h3>Libraries</h3>
              <ul>
                {this.getIndices(project.Libraries, iconsNames).map(
                  (i) =>
                    i > -1 && (
                      <li className="icon" key={i}>
                        {icons[i]}
                      </li>
                    )
                )}
              </ul>
              <ul>
                {project.Libraries.map((t) => (
                  <li className="icon-text" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.Serverless_Cloud_Provider && (
            <div className="icons-container">
              <h3>Serverless Cloud Provider</h3>
              <ul>
                {this.getIndices(
                  project.Serverless_Cloud_Provider,
                  iconsNames
                ).map(
                  (i) =>
                    i > -1 && (
                      <li className="icon" key={i}>
                        {icons[i]}
                      </li>
                    )
                )}
              </ul>
              <ul>
                {project.Serverless_Cloud_Provider.map((t) => (
                  <li className="icon-text" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.Test_Runners && (
            <div className="icons-container">
              <h3>Test Runners</h3>
              <ul>
                {this.getIndices(project.Test_Runners, iconsNames).map(
                  (i) =>
                    i > -1 && (
                      <li className="icon" key={i}>
                        {icons[i]}
                      </li>
                    )
                )}
              </ul>
              <ul>
                {project.Test_Runners.map((t) => (
                  <li className="icon-text" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.Architecture && (
            <div className="icons-container">
              <h3>Architecture</h3>
              <ul>
                {this.getIndices(project.Architecture, iconsNames).map(
                  (i) =>
                    i > -1 && (
                      <li className="icon" key={i}>
                        {icons[i]}
                      </li>
                    )
                )}
              </ul>
              <ul>
                {project.Architecture.map((t) => (
                  <li className="icon-text" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.Environment && (
            <div className="icons-container">
              <h3>Environment</h3>
              <ul>
                {this.getIndices(project.Environment, iconsNames).map(
                  (i) =>
                    i > -1 && (
                      <li className="icon" key={i}>
                        {icons[i]}
                      </li>
                    )
                )}
              </ul>
              <ul>
                {project.Environment.map((t) => (
                  <li className="icon-text" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.Database && (
            <div className="icons-container">
              <h3>Database</h3>
              <ul>
                {this.getIndices(project.Database, iconsNames).map(
                  (i) =>
                    i > -1 && (
                      <li className="icon" key={i}>
                        {icons[i]}
                      </li>
                    )
                )}
              </ul>
              <ul>
                {project.Database.map((t) => (
                  <li className="icon-text" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.Technologies && (
            <div className="icons-container">
              <h3>Technologies</h3>
              <ul>
                {this.getIndices(project.Technologies, iconsNames).map(
                  (i) =>
                    i > -1 && (
                      <li className="icon" key={i}>
                        {icons[i]}
                      </li>
                    )
                )}
              </ul>
              <ul>
                {project.Technologies.map((t) => (
                  <li className="icon-text" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.Nodejs_Middlewares && (
            <div className="icons-container">
              <h3>Node.js Middlewares</h3>
              <ul>
                {this.getIndices(project.Nodejs_Middlewares, iconsNames).map(
                  (i) =>
                    i > -1 && (
                      <li className="icon" key={i}>
                        {icons[i]}
                      </li>
                    )
                )}
              </ul>
              <ul>
                {project.Nodejs_Middlewares.map((t) => (
                  <li className="icon-text" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.Heroku_Deployment && (
            <div className="icons-container">
              <h3>Links</h3>
              <a href={project.Heroku_Deployment}>
                {" "}
                {this.getIndicesReverse(
                  project.Heroku_Deployment,
                  iconsNames
                ).map(
                  (i) =>
                    i > -1 && (
                      <li className="icon" key={i}>
                        {icons[i]}
                      </li>
                    )
                )}
              </a>
            </div>
          )}

          {project.Github_Repo && (
            <div className="icons-container">
              <a href={project.Github_Repo}>
                {" "}
                {this.getIndicesReverse(project.Github_Repo, iconsNames).map(
                  (i) =>
                    i > -1 && (
                      <li className="icon" key={i}>
                        {icons[i]}
                      </li>
                    )
                )}
              </a>
            </div>
          )}

          {project.Live_Site && (
            <div className="icons-container">
              <a href={project.Live_Site}>
                {" "}<FiExternalLink /></a>
              </div>
          )}

          
        </div>
      </div>
    );
  }
}
