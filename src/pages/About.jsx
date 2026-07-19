import SkillsSection from "../components/SkillsSection.jsx";
import InternshipCallout from "../components/InternshipCallout.jsx";
import LeadershipSection from "../components/LeadershipSection.jsx";
import selfie from "../assets/selfieNaturePicture.jpg";

export default function About() {
  return (
    <>
      <section className="page-hero">
        <h1>
          About <span className="accent">Me</span>
        </h1>
      </section>

      <section className="section about-bio">
        <img src={selfie} alt="Sarvin outside at a harbour" className="about-photo" />
        <p>
          Hi, I'm Sarvin — a developer, problem-solver, and serial tinkerer
          who can't resist improving anything I touch, whether it's a website
          layout, a workflow, or a random piece of tech that wasn't even
          broken. I love building clean, responsive interfaces and
          experimenting with design, from glowing cyberpunk buttons to custom
          logos that actually look intentional.
        </p>
        <p>
          When I'm not coding, I'm a Star Scout working toward Eagle, which
          means I've mastered the art of leadership, teamwork, and surviving
          situations that definitely weren't in the handbook. I also play
          piano and violin and perform in my school orchestra, so I balance
          logic with creativity. I'm the kind of person who learns fast,
          works hard, and genuinely enjoys figuring things out — whether it's
          debugging a stubborn script or helping younger scouts tie knots
          that don't immediately fall apart.
        </p>
      </section>

      <SkillsSection />
      <InternshipCallout />
      <LeadershipSection />
    </>
  );
}
