import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import AiMl from "./pages/projects/AiMl.jsx";
import Esp32 from "./pages/projects/Esp32.jsx";
import Games from "./pages/projects/Games.jsx";
import WebApps from "./pages/projects/WebApps.jsx";
import BasicJs from "./pages/projects/BasicJs.jsx";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-shell">
      <Sidebar open={sidebarOpen} onNavigate={() => setSidebarOpen(false)} />
      <div
        className={`sidebar-overlay${sidebarOpen ? " show" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      <div className="main-col">
        <div className="mobile-topbar">
          <button
            className="mobile-menu-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <i className="fa-solid fa-bars" />
          </button>
          <span className="mobile-brand">Sarvin</span>
        </div>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/ai" element={<AiMl />} />
            <Route path="/projects/esp32" element={<Esp32 />} />
            <Route path="/projects/games" element={<Games />} />
            <Route path="/projects/webapps" element={<WebApps />} />
            <Route path="/projects/basic-js" element={<BasicJs />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Contact />
      </div>
    </div>
  );
}
