import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My projects <span>&</span>
          <br />experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>EZRun</h4>
                <h5>IoT Control App</h5>
              </div>
              <h3>LIVE</h3>
            </div>
            <p>
              Android app to control IoT devices with authentication and a
              Django backend. Built with Flutter frontend. Live on the Play
              Store.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MachMate.in</h4>
                <h5>Machine Marketplace</h5>
              </div>
              <h3>LIVE</h3>
            </div>
            <p>
              Platform connecting machine makers with work seekers, built using
              Django for the backend and React + Tailwind CSS for the frontend.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BrandFlow</h4>
                <h5>Business Management</h5>
              </div>
              <h3>PROJECT</h3>
            </div>
            <p>
              Full-stack business management platform with React frontend and
              Django REST backend, unifying clients, employees, tasks, documents,
              and mailing into a single dashboard.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>FINTRACK</h4>
                <h5>Finance Management</h5>
              </div>
              <h3>PROJECT</h3>
            </div>
            <p>
              Django-based financial management tool that helps business owners
              manage inventory, generate bills, and track finances with a clean,
              Bootstrap-styled UI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
