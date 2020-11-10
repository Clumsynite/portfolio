import { Link } from "react-router-dom";
import Name from "./Name";
import ProjectCard from "../templates/ProjectCard";
import "../templates/projects";
import projects from "../templates/projects";
import "../styles/Elements.css";

const Home = () => {
  const sixProjects = projects.slice(0, 6);
  return (
    <div className="Home">
      <section className="scroll-child">
        <Name />
      </section>
      <section className="scroll-child container py-4 mb-5">
        <h1
          className="text-center mb-4 section-title"
          id="recent-projects"
          name="recent-projects"
        >
          Recent Projects
        </h1>
        <div className="row row-cols-1 row-cols-md-3">
          {sixProjects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
        <div className="curved-div">
          <Link className="link" to="/projects">
            View more Projects
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
