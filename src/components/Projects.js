import ProjectCard from "../templates/ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <div className="Projects container">
      <h1 className="text-center mb-4 pt-3 section-title">All Projects</h1>
      <div className="row row-cols-1 row-cols-md-3">
        {projects.map((project, index) => {
          return <ProjectCard project={project} long={true} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
