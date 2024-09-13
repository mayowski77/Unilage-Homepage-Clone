import React from 'react';
import '../styles/VCVisionSection.css'; // Ensure the correct path for your CSS file

const VCVisionSection = () => {
  return (
    <div className="vc-vision-section">
      <div className="vc-text-column">
        <div className="vc-title">Vice Chancellor's Vision</div>
        <div className="vc-quote">“</div>
        <div className="vc-statement">
          To build the most innovative and entrepreneurial university in Africa
          among the top 200 globally, yielding inquiring minds as well as
          discoveries that are locally and globally impactful.
        </div>
        <div className="vc-name">Professor Folasade T. Ogunsola</div>
        <div className="vc-qualifications">
          MBChB, FMCPath, FWACP, FRCPath (UK) PhD (Cardiff) FNAMed, FAMedS, OON,
          FAS
        </div>
        <div className="vc-title-role">UNILAG VC</div>
        <button className="vc-button">Read the entire VC agenda →</button>
      </div>
      <div className="vc-image-column">
        <img
          className="vc-image"
          src="https://i.postimg.cc/3wBpxWQJ/VC-unilag.jpg"
          alt="Professor Folasade T. Ogunsola"
        />
      </div>
    </div>
  );
};

export default VCVisionSection;