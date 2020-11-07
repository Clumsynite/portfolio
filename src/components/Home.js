import Name from "./Name";
import ProjectCard from "../templates/ProjectCard";
import "../templates/projects";
import projects from "../templates/projects";

const Home = () => {
  return (
    <div className="Home">
      <section className="scroll-child">
        <Name />
      </section>
      <section className="scroll-child container pt-4">
        <div class="row row-cols-1 row-cols-md-3">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
