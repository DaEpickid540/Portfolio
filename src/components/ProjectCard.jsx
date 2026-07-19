import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-head">
        <h3>{project.title}</h3>
        {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
      </div>

      <p className="project-desc">{project.description}</p>

      {project.subitems && (
        <ul className="project-subitems">
          {project.subitems.map((item) => (
            <li key={item.name}>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.name}
              </a>
              <span> — {item.note}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="tech-badges">
        {project.tech.map((t) => (
          <span className="badge" key={t}>
            {t}
          </span>
        ))}
      </div>

      <div className="project-links">
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary">
            View Live
          </a>
        )}
        <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline">
          GitHub
        </a>
      </div>
    </article>
  );
}
