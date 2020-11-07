const ProjectCard = () => {
  return (
    <div className="ProjectCard">
      <div className="col mb-4">
        <div className="card text-white bg-dark">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div className="d-flex justify-content-around align-content-center flex-wrap pb-3">
            <a href="/" class="btn btn-primary">
              Go somewhere
            </a>
            <a href="/" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
