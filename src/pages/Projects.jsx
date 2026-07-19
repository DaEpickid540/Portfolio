import ProjectCard from "../components/ProjectCard.jsx";
import { categories, projects } from "../data/projects.js";

export default function Projects() {
  return (
    <>
      <section className="page-hero">
        <h1>
          My <span className="accent">Projects</span>
        </h1>
        <p className="hero-sub">
          Grouped by what they actually are, not just when I built them.
        </p>
      </section>

      {categories.map((cat) => {
        const items = projects.filter((p) => p.categories.includes(cat.id));
        if (items.length === 0) return null;
        return (
          <section className="section" key={cat.id}>
            <h2 className="accent section-title">{cat.label}</h2>
            <p className="section-blurb">{cat.blurb}</p>
            <div className="project-grid">
              {items.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
