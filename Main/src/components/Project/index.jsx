import { removeHyphensAndCapitalize } from "../../utils/helpers";
import * as projects from "../../assets";

function Project({ project }) {
  const { name, repo, link, description } = project;

  return (
    <div className="project" key={name}>
      {/* daisy ui card */}
      <div className="card w-96 glass project">
        <figure>
          {/* screenshot of the project */}
          <img src={projects[name]} alt={removeHyphensAndCapitalize(name)} />
        </figure>

        <div className="card-body py-0">
          <p className="card-title flex flex-col items-start">
            <p className="text-gradient m-0 text-3xl">{name}</p>
            <ul className=" text-start">
              Demo User:
              <li>ID : lucy1122</li>
              <li>Password: lucy1122</li>
            </ul>
          </p>
          <div className="card-actions justify-end project-text">
            <div className="project-text">
              <h3>
                {/* name of the project */}
                <a href={link}>{removeHyphensAndCapitalize(name)}</a>
                &nbsp;
                {/* link of the repo  */}
                <a href={repo}>
                  <i className="fab fa-github" />
                </a>
              </h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
