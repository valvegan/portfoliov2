import React from "react";
//aws
import { FaAws } from "react-icons/fa";
import { SiHeroku } from "react-icons/si";
import { SiCucumber } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { DiCss3 } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { SiJest } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiJquery } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { GrNode } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiPuppeteer } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPassport } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import ScrollComponent from "./ScrollComponent";
import "./portfolio-file.css";

export class PortfolioList extends React.Component {
  state = {
    buttonExpand: false,
  };

  buttonToggle() {
    this.setState({ buttonExpand: !this.state.buttonExpand });
  }

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
      <div key={project.id} className="portfolio-card-container">
        <h1>{project.Title}</h1>

        <p className="project-description">{project.Description}</p>
        {project.Description_2 && (
          <div className="description-2">
            <button
              onClick={() => this.buttonToggle()}
              className={this.state.buttonExpand ? "read-less" : "read-more"}
            >
              {this.state.buttonExpand ? "Read less" : "Read more"}
            </button>
            {this.state.buttonExpand && (
              <p className="project-description-2"> {project.Description_2}</p>
            )}
          </div>
        )}

        <ScrollComponent img={project.imgmobile} />

        <div className="project-img-wrapper">
          <a
            href={project.Live_Site || project.Github_Repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              key={project.img}
              className="project-img"
              src={project.img}
              alt="preview of the project"
            ></img>
          </a>
        </div>

        <div className="technologies">
          {project.Frameworks && (
            <div className="icons-container">
              <h3>Frameworks</h3>
              <ul className="icons-ul">
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
              <ul className="icons-ul">
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
              <ul className="icons-ul">
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
              <ul className="icons-ul">
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
              <ul className="icons-ul">
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

          {project.Database && (
            <div className="icons-container">
              <h3>Database</h3>
              <ul className="icons-ul">
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
              <ul className="icons-ul">
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
        </div>

        <div className="links-container">
          <h3>Links</h3>
          <ul>
            {project.Heroku_Deployment && (
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
            )}

            {project.Github_Repo && (
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
            )}

            {project.Live_Site && (
              <a href={project.Live_Site}>
                {" "}
                <li className="icon">
                  <FiExternalLink />
                </li>
              </a>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
