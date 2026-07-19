import { Link } from "react-router-dom";
import { categories, projects } from "../data/projects.js";
import "./Projects.css";

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

      <section className="section">
        <div className="category-grid">
          {categories.map((cat) => {
            const count = projects.filter((p) => p.categories.includes(cat.id)).length;
            return (
              <Link className="category-card" to={`/projects/${cat.id}`} key={cat.id}>
                <div className="category-card-top">
                  <span className="category-card-icon">
                    <i className={cat.icon} />
                  </span>
                  <span className="category-card-count">{count}</span>
                </div>
                <h3>{cat.label}</h3>
                <p>{cat.blurb}</p>
                <span className="category-card-cta">
                  View projects <i className="fa-solid fa-arrow-right" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
