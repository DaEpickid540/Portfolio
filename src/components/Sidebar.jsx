import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";
import { categories } from "../data/projects.js";
import "./Sidebar.css";

export default function Sidebar({ open, onNavigate }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <aside className={`sidebar${open ? " open" : ""}`}>
      <div className="sidebar-header">
        <NavLink to="/" end className="sidebar-logo" onClick={onNavigate}>
          <span className="logo-dot" />
          <span className="sidebar-logo-name">Sarvin</span>
        </NavLink>
      </div>

      <div className="sidebar-scroll">
        <div className="side-section">
          <div className="side-section-head">
            <span>Menu</span>
          </div>
          <nav className="cat-nav">
            <NavLink
              to="/"
              end
              onClick={onNavigate}
              className={({ isActive }) => `cat-item${isActive ? " active" : ""}`}
            >
              <i className="fa-solid fa-house lead" />
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/about"
              onClick={onNavigate}
              className={({ isActive }) => `cat-item${isActive ? " active" : ""}`}
            >
              <i className="fa-solid fa-user lead" />
              <span>About</span>
            </NavLink>
          </nav>
        </div>

        <div className="side-section">
          <div className="side-section-head">
            <span>Projects</span>
          </div>
          <nav className="cat-nav">
            <NavLink
              to="/projects"
              end
              onClick={onNavigate}
              className={({ isActive }) => `cat-item${isActive ? " active" : ""}`}
            >
              <i className="fa-solid fa-diagram-project lead" />
              <span>All Projects</span>
            </NavLink>
            {categories.map((cat) => (
              <NavLink
                key={cat.id}
                to={`/projects/${cat.id}`}
                onClick={onNavigate}
                className={({ isActive }) => `cat-item${isActive ? " active" : ""}`}
              >
                <i className={`${cat.icon} lead`} />
                <span>{cat.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      <div className="sidebar-footer">
        <button className="nav-item" onClick={toggleTheme}>
          <i className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"} nav-icon`} />
          <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
        </button>
        <a
          className="nav-item"
          href="https://github.com/DaEpickid540"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github nav-icon" />
          <span>GitHub</span>
        </a>
      </div>
    </aside>
  );
}
