import React from 'react';
import '../styles/MustVisitAreasSection.css'; // Ensure the correct path for your CSS file

const MustVisitAreasSection = () => {
  return (
    <div className="must-visit-areas-section">
      <div className="must-visit-title">Must visit areas on campus</div>
      <div className="must-visit-subtitle">
        From in-person and virtual tour options, you can get to see and know
        UNILAG.
      </div>
      <div className="must-visit-grid">
        <div className="must-visit-card">
          <img
            src="https://i.postimg.cc/02WQLXbX/Rectangle-7.png"
            alt="Sport Centre"
          />
          <div className="must-visit-caption">Sport Centre</div>
          <div className="must-visit-description">
            With club sports, recreation events, group exercise, and lots of
            teams to cheer on, UNILAG sports is for everyone to enjoy.
          </div>
        </div>
        <div className="must-visit-card">
          <img
            src="https://i.postimg.cc/HsxW40Bw/Rectangle-8.png"
            alt="Amphi Theatre"
          />
          <div className="must-visit-caption">Amphi Theatre</div>
          <div className="must-visit-description">
            Our museums feature unique and a wide variety of collections
            offering educational experiences for everyone.
          </div>
        </div>
        <div className="must-visit-card">
          <img
            src="https://i.postimg.cc/PJFjFc2m/Rectangle-9.png"
            alt="Lagoon Front"
          />
          <div className="must-visit-caption">Lagoon Front</div>
          <div className="must-visit-description">
            Ahead of its scheduled Conference and blood donation drive,
            executive members of the KB Club, College of Medicine, University of
            Lagos...
          </div>
        </div>
      </div>
    </div>
  );
};

export default MustVisitAreasSection;