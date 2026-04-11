import "./styles/Projects.css";
import { MdArrowOutward } from "react-icons/md";

const projects = [
  {
    number: "01",
    title: "Metric Murder",
    date: "Jan 2025",
    tags: ["Product Management", "UX Flow", "Node.js", "Gamification"],
    description:
      "Built an interactive web-based product-management game (Node.js) that simulates KPI tracking and feature trade-offs, reflecting a data-driven, end-to-end product mindset from problem framing and user-flow design to execution and iterative improvement based on user feedback.",
    link: "https://metricmurder.online",
  },
  {
    number: "02",
    title: "Digital Zen BV",
    date: "Jan 2024",
    tags: ["Strategy Consulting", "Market Analysis", "Netherlands"],
    description:
      "Developed a founder diagnostic and growth blueprint for a Netherlands-based startup, analysing product-market fit, monetisation, and scalable growth strategy in collaboration with the founding team.",
    link: null,
  },
  {
    number: "03",
    title: "The Drunk Qubit",
    date: "Apr 2026",
    tags: ["Quantum Finance", "Python", "PennyLane", "yfinance", "Pandas"],
    description:
      "Built a quantum walk-based momentum signal using PennyLane quantum circuits and rolling Hurst exponent analysis, tested on 30 large-cap equities with permutation testing for statistical validation.",
    link: "https://drunkquibit.netlify.app",
  },
];

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <div className="projects-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-card-header">
                <span className="project-number">{project.number}</span>
                <span className="project-date">{project.date}</span>
              </div>

              <div className="project-card-body">
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                      data-cursor="disable"
                    >
                      <MdArrowOutward />
                    </a>
                  )}
                </div>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span className="project-tag" key={tagIndex}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
