import "./styles/Hackathons.css";
import { MdEmojiEvents } from "react-icons/md";

const hackathons = [
  {
    place: "1st Place",
    event: "Hult MAHE On-Campus",
    project: "Threadly",
    description:
      "Built a sustainable fashion app that allowed users to manage their closets with the power of AI. Had a built-in circular fashion market to buy and sell thrifted clothes.",
    tags: ["AI", "Sustainability", "Marketplace"],
    accent: "#FFD700",
  },
  {
    place: "National Finals · Top 5",
    event: "Samsung PRISM",
    project: "Threadly.AI",
    description:
      "Built a Chrome extension that keeps track of all your online shopping and gives live style tips whenever you shop for clothes.",
    tags: ["Chrome Extension", "AI Styling", "E-Commerce"],
    accent: "#5EEAD4",
  },
  {
    place: "Top 50 Nationally",
    event: "Microsoft AI Unlocked",
    project: "Sarkari AI",
    description:
      "Built a phone number anyone could call to get information on and apply to government schemes from just phone calls — an attempt to bring AI to people without smartphones.",
    tags: ["Voice AI", "Accessibility", "Gov-Tech"],
    accent: "#A78BFA",
  },
];

const Hackathons = () => {
  return (
    <div className="hackathons-section" id="hackathons">
      <div className="hackathons-container section-container">
        <h2>
          Hack<span>athons</span>
        </h2>

        <div className="hackathons-timeline">
          {hackathons.map((hack, index) => (
            <div
              className="hackathon-card"
              key={index}
              style={{ "--card-accent": hack.accent } as React.CSSProperties}
            >
              <div className="hackathon-badge">
                <MdEmojiEvents />
                <span>{hack.place}</span>
              </div>

              <div className="hackathon-body">
                <span className="hackathon-event">{hack.event}</span>
                <h3>{hack.project}</h3>
                <p className="hackathon-description">{hack.description}</p>
              </div>

              <div className="hackathon-tags">
                {hack.tags.map((tag, i) => (
                  <span className="hackathon-tag" key={i}>
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

export default Hackathons;
