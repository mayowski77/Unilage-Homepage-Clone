import React from 'react';
import '../styles/MeetOurFacultySection.css'; // Ensure the correct path for your CSS file

const MeetOurFacultySection = () => {
  return (
    <div className="meet-faculty-section">
      <div className="faculty-title">Meet our Faculty</div>
      <div className="faculty-featured">
        <div className="featured-member">
          <img
            src="https://i.postimg.cc/DZT4CnFG/image-21.jpg"
            alt="Dr. Adesanmi Mogbademu"
          />
          <div className="faculty-title">
            Head of department for Mathematics
          </div>
          <div className="faculty-quote">
            "Welcoming all students to the department, I charge you to be worthy
            ambassadors of the department and wish you a fruitful sojourn
            through UNILAG."
          </div>
        </div>
        <div className="faculty-showcase">
          <div className="faculty-member">
            <img
              src="https://i.postimg.cc/mkZzsjP2/Frame-11.jpg"
              alt="Professor Ige Bolodeoku"
            />
          </div>
          <div className="faculty-member">
            <img
              src="https://i.postimg.cc/QtJ9wwxy/Frame-12.jpg"
              alt="Professor Olufunke Adeboye"
            />
          </div>
          <div className="faculty-member">
            <img
              src="https://i.postimg.cc/Kj9KvTT7/Frame-13.jpg"
              alt="Professor Karen-King Aribisala"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurFacultySection;