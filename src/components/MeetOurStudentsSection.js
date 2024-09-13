import React from 'react';
import '../styles/MeetOurStudentsSection.css'; // Ensure the correct path for your CSS file

const MeetOurStudentsSection = () => {
  return (
    <div className="meet-students-section">
      <div className="students-title">Meet our Students</div>
      <div className="students-featured">
        <div className="students-left">
          <div className="quote-marks">“</div>
          <div className="students-quote">
            We are looking at partnering with the Department of Marine Sciences
            by selecting and training participants from the department on
            permaculture and sustainable agriculture.
          </div>
          <div className="students-name">Ms. Oludamilola Sansadeen</div>
          <div className="students-position">
            UNILAG Student of the Department of Marine Sciences
          </div>
        </div>
        <div className="students-right">
          <img
            src="https://i.postimg.cc/T3g5bMdL/Frame-11-1.png"
            alt="Ms. Oludamilola Sansadeen"
          />
        </div>
      </div>
      <div className="students-showcase">
        <div className="student-profile">
          <img
            src="https://i.postimg.cc/W4VF6Wz9/Frame-12-1.png"
            alt="Student 1"
          />
        </div>
        <div className="student-profile">
          <img
            src="https://i.postimg.cc/zfkLdCRq/Frame-13-1.png"
            alt="Student 2"
          />
        </div>
        <div className="student-profile">
          <img
            src="https://i.postimg.cc/NfWrLfcv/image-21-1.png"
            alt="Student 3"
          />
        </div>
      </div>
    </div>
  );
};

export default MeetOurStudentsSection;