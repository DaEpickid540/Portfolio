import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";
import logo from "../assets/logo.png";
import "./Sidebar.css";

const links = [
  { to: "/", label: "Home", icon: "fa-solid fa-house", end: true },
  { to: "/projects", label: "Projects", icon: "fa-solid fa-diagram-project" },
  { to: "/about", label: "About", icon: "fa-solid fa-user" },
];

export default function Sidebar({ open, onNavigate }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <aside className={`sidebar${open ? " open" : ""}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img src={logo} alt="Sarvin logo" className="sidebar-logo-img" />
        </div>
      </div>

      <div className="sidebar-scroll">
        <div className="side-section">
          <div className="side-section-head">
            <span>Menu</span>
          </div>
          <nav className="cat-nav">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={onNavigate}
                className={({ isActive }) => `cat-item${isActive ? " active" : ""}`}
              >
                <i className={`${link.icon} lead`} />
                <span>{link.label}</span>
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
