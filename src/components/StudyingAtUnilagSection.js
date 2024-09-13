import React from 'react';
import '../styles/StudyingAtUnilagSection.css'; // Ensure the correct path for your CSS file

const StudyingAtUnilagSection = () => {
  return (
    <div className="studying-section">
      <h2 className="studying-header">Studying at UNILAG</h2>
      <div className="studying-grid">
        <div className="studying-item">
          <img
            src="https://i.postimg.cc/F1wks1Gz/Continuing-Education.jpg"
            alt="Continuing Education"
          />
          <div className="studying-title">Continuing Education</div>
          <div className="studying-description">
            Explore various continuing education programs offered at UNILAG.
          </div>
        </div>
        <div className="studying-item">
          <img
            src="https://i.postimg.cc/B8ZXwFZY/Distance-Learning.jpg"
            alt="Distance Learning"
          />
          <div className="studying-title">Distance Learning</div>
          <div className="studying-description">
            Discover our flexible distance learning options tailored for you.
          </div>
        </div>
        <div className="studying-item">
          <img
            src="https://i.postimg.cc/7f7GCDQV/Postgraduates.jpg"
            alt="Postgraduates"
          />
          <div className="studying-title">Postgraduate Programs</div>
          <div className="studying-description">
            Advance your career with our diverse postgraduate programs.
          </div>
        </div>
        <div className="studying-item">
          <img
            src="https://i.postimg.cc/ZWS9pgGh/Prospective-Students.jpg"
            alt="Prospective Students"
          />
          <div className="studying-title">Prospective Students</div>
          <div className="studying-description">
            Join our vibrant community as a prospective student at UNILAG.
          </div>
        </div>
        <div className="studying-item">
          <img
            src="https://i.postimg.cc/6447fN6B/Undergraduates.jpg"
            alt="Undergraduates"
          />
          <div className="studying-title">Undergraduate Programs</div>
          <div className="studying-description">
            Explore our undergraduate programs and find your passion.
          </div>
        </div>
        <div className="studying-item">
          <img
            src="https://i.postimg.cc/QFJFbmDK/Unilag-Staff.jpg"
            alt="UNILAG Staff"
          />
          <div className="studying-title">Meet Our Staff</div>
          <div className="studying-description">
            Get to know the dedicated staff members supporting your education.
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyingAtUnilagSection;