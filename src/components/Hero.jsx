import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <p className="hero-kicker">Student Developer · Age 16</p>
      <h1>
        I build <span className="accent">real projects</span> at 16.
      </h1>
      <p className="hero-sub">
        AI agents, ESP32 hardware, Godot games, and Firebase-backed web apps —
        shipped, not just planned.
      </p>
      <div className="hero-actions">
        <Link to="/projects" className="btn btn-primary">
          View Projects
        </Link>
        <a href="#contact" className="btn btn-outline">
          Get In Touch
        </a>
      </div>
    </section>
  );
}
