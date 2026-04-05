import "./styles/Publications.css";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { RiShieldKeyholeLine } from "react-icons/ri";

const publications = [
  {
    type: "paper" as const,
    title:
      "The Business and Engineering Future of Topological Conductors and Majorana Devices",
    description:
      "Authored a research paper on topological conductors and Majorana devices analysing quantum-computing applications and commercialisation pathways.",
    venue: "SSRN, Electrical Engineering eJournal Vol 8, Issue 92",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5180825",
  },
  {
    type: "paper" as const,
    title:
      "Quantum Advantage in Embedded Systems: Hype or Imminent Reality?",
    description:
      "Authored a multi-journal SSRN/arXiv research paper on quantum advantage in embedded systems, evaluating NISQ-era feasibility and hybrid quantum-classical models for resource-constrained computing.",
    venue: "SSRN / arXiv",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5215460",
  },
  {
    type: "patent" as const,
    title:
      "Wearable Biomedical Monitoring Device with Quantum-Dot Based Cancer Biomarker Detection",
    description:
      "Provisional patent owned for a wearable microneedle-based cancer biomarker detection device using quantum-dot biosensing and on-device AI for real-time monitoring.",
    venue: "Indian Patent App. No. 202511060969",
    link: null,
  },
];

const Publications = () => {
  return (
    <div className="publications-section" id="publications">
      <div className="publications-container section-container">
        <h2>
          Publications <span>&amp; IP</span>
        </h2>

        <div className="publications-list">
          {publications.map((pub, index) => (
            <div className={`pub-card pub-card--${pub.type}`} key={index}>
              <div className="pub-icon">
                {pub.type === "paper" ? (
                  <HiOutlineDocumentText />
                ) : (
                  <RiShieldKeyholeLine />
                )}
              </div>

              <div className="pub-content">
                <span className="pub-type-badge">
                  {pub.type === "paper" ? "Research Paper" : "Patent"}
                </span>
                <h3>{pub.title}</h3>
                <p className="pub-description">{pub.description}</p>
                <span className="pub-venue">{pub.venue}</span>
              </div>

              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="pub-link"
                  data-cursor="disable"
                  aria-label={`Read: ${pub.title}`}
                >
                  <MdArrowOutward />
                  <span>Read</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
