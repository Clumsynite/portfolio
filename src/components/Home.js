import Name from "./Name";
import ProjectCard from "./ProjectCard";

const Home = () => {
  return (
    <div className="Home">
      <section className="scroll-child">
        <Name />
      </section>
      <section className="scroll-child container pt-4">
        <div class="row row-cols-1 row-cols-md-3">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </div>
  );
};

export default Home;
