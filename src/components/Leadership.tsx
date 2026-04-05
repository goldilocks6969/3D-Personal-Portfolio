import "./styles/Leadership.css";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { MdOutlineMic, MdOutlineSchool } from "react-icons/md";

const distinctions = [
  {
    icon: "globe" as const,
    title: "Model United Nations",
    highlight: "60+ MUNs · 26 Committees Chaired",
    description:
      "Delegated in 60+ MUNs and chaired 26 national-level committees, overseeing negotiations, drafting, and crisis simulations.",
  },
  {
    icon: "mic" as const,
    title: "National-Level Debater",
    highlight: "Parliamentary & Policy Debate",
    description:
      "Competed in structured parliamentary and policy debates at the national level, developing advanced argumentation, rapid research, and persuasion skills under competitive conditions.",
  },
  {
    icon: "school" as const,
    title: "School Ambassador / Head Boy",
    highlight: "Class 12 · Institutional Representative",
    description:
      "Represented the institution in academic outreach and inter-school programs.",
  },
];

const iconMap = {
  globe: <HiOutlineGlobeAlt />,
  mic: <MdOutlineMic />,
  school: <MdOutlineSchool />,
};

const Leadership = () => {
  return (
    <div className="leadership-section" id="leadership">
      <div className="leadership-container section-container">
        <h2>
          Leadership <span>& Distinction</span>
        </h2>

        <div className="leadership-grid">
          {distinctions.map((item, index) => (
            <div className="leadership-card" key={index}>
              <div className="leadership-icon">{iconMap[item.icon]}</div>
              <div className="leadership-content">
                <h3>{item.title}</h3>
                <span className="leadership-highlight">{item.highlight}</span>
                <p className="leadership-description">{item.description}</p>
              </div>
              <span className="leadership-index">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
