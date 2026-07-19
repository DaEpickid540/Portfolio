import "./SkillsSection.css";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["HTML/CSS", "JavaScript", "React", "TypeScript"],
  },
  {
    label: "Backend",
    skills: ["Node.js / Express", "Firebase / Firestore", "FastAPI", "Flask"],
  },
  {
    label: "AI / ML",
    skills: ["Hugging Face", "LoRA fine-tuning", "LLMs", "Ollama"],
  },
  {
    label: "Hardware",
    skills: ["ESP32", "Arduino", "Raspberry Pi"],
  },
  {
    label: "Tools",
    skills: ["Git / GitHub", "VS Code", "PC building"],
  },
  {
    label: "Currently Learning",
    skills: ["Godot 4", "Python"],
  },
];

export default function SkillsSection() {
  return (
    <section className="skills">
      <h2 className="accent section-title">Skills</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.label}>
            <h3>{group.label}</h3>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
