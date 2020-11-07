const ProjectCard = (props) => {
  const { title, desc, live, repo, png, gif } = props.project;

  return (
    <div className="ProjectCard">
      <div className="col mb-4">
        <div className="card text-white bg-dark">
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
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
          </div>
          <div className="d-flex justify-content-around align-content-center flex-wrap pb-3">
            <a
              href={repo}
              rel="noreferrer"
              target="_blank"
              class="btn btn-primary"
            >
              Repo
            </a>
            <a
              href={live}
              rel="noreferrer"
              target="_blank"
              class="btn btn-primary"
            >
              Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
