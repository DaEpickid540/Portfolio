import ProjectCard from "./ProjectCard.jsx";
import { categories, projects } from "../data/projects.js";

export default function CategoryPage({ categoryId }) {
  const category = categories.find((c) => c.id === categoryId);
  const items = projects.filter((p) => p.categories.includes(categoryId));

  return (
    <>
      <section className="page-hero">
        <p className="hero-kicker">Projects</p>
        <h1>{category.label}</h1>
        <p className="hero-sub">{category.blurb}</p>
      </section>

      <section className="section">
        <div className="project-grid">
          {items.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </section>
    </>
  );
}
