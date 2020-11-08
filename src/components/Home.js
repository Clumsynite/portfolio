import Name from "./Name";
import ProjectCard from "../templates/ProjectCard";
import "../templates/projects";
import projects from "../templates/projects";
import "../styles/Home.css";

const Home = () => {
  const sixProjects = projects.slice(0, 6);
  return (
    <div className="Home">
      <section className="scroll-child">
        <Name />
      </section>
      <section className="scroll-child container pt-4">
        <h1 className="text-center mb-4 section-title">Recent Projects</h1>
        <div className="row row-cols-1 row-cols-md-3">
          {sixProjects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
