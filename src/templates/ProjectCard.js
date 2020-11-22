import { Markup } from "interweave";
import { InlineIcon } from "@iconify/react";
import baselineRemoveRedEye from "@iconify/icons-ic/baseline-remove-red-eye";
import repoIcon from "@iconify-icons/codicon/repo";
import Languages from "./Languages-Project";
import "../styles/Elements.css";

const ProjectCard = (props) => {
  const {
    title,
    desc,
    live,
    repo,
    png,
    gif,
    languages,
    purpose,
  } = props.project;

  return (
    <div className="ProjectCard col mb-4">
      <div className="card h-100 text-white bg-dark">
        <img
          src={png}
          alt={title}
          className="card-img-top"
          onMouseEnter={(e) => {
            e.target.src = gif;
          }}
          onMouseLeave={(e) => {
            e.target.src = png;
          }}
        />
        <div className="card-body">
          <h5 className="card-title font-weight-bold">{title}</h5>
          <div className="card-text">
            <Markup content={desc} />
          </div>
          {props.long && (
            <p className="card-text">
              <strong>Purpose: </strong>
              {purpose.map((item, index) => {
                return (
                  <li key={index}>
                    <i>{item}</i>
                  </li>
                );
              })}
            </p>
          )}
        </div>
        <div className="pb-3">
          <Languages
            languages={languages}
            className={
              "d-flex justify-content-around align-content-center flex-wrap"
            }
          />
        </div>
        <div className="d-flex justify-content-around align-content-center flex-wrap pb-3">
          <a
            href={repo}
            rel="noreferrer"
            target="_blank"
            className="btn btn-info"
            style={{ width: "40%" }}
          >
            <InlineIcon icon={repoIcon} /> Repo
          </a>
          <a
            href={live}
            rel="noreferrer"
            target="_blank"
            className="btn btn-danger"
            style={{ width: "40%" }}
          >
            <InlineIcon icon={baselineRemoveRedEye} /> Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
