import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import InternshipCallout from "../components/InternshipCallout.jsx";
import { featuredProjects } from "../data/projects.js";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <h2 className="accent section-title">Featured Projects</h2>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
        <div className="section-cta">
          <Link to="/projects" className="btn btn-outline">
            View All Projects
          </Link>
        </div>
      </section>

      <InternshipCallout />
    </>
  );
}
