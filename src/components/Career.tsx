import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Manager</h4>
                <h5>Picklebugs Pvt Ltd</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Led building and pilot launch of AI-powered pickleball booking
              platform and pickleball courts across schools and societies.
              Driving product strategy and go-to-market execution in Gurugram.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Manager</h4>
                <h5>Junction · Manipal</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Led project management, product strategy, and go-to-market
              consulting for Junction, driving development, marketing, and 0→1
              student community growth to launch a secure campus marketplace
              from scratch.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student Researcher</h4>
                <h5>IIT Bombay</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Selected for and completed an intensive on-campus research
              program covering Machine Learning, Quantum Communication, and
              Signal Processing. Collaborated with faculty and PhD scholars
              to build advanced technical and research skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5>Indian Molestation Cyber Helpline</h5>
              </div>
              <h3>2021–22</h3>
            </div>
            <p>
              Founded nationwide cyber-safety NGO; led 700+ volunteers and
              launched police-integrated reporting system supporting 500+
              victims.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
