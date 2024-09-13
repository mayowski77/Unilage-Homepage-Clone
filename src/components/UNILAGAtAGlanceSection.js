import React from 'react';
import '../styles/UNILAGAtAGlanceSection.css'; // Ensure the correct path for your CSS file

const UNILAGAtAGlanceSection = () => {
  return (
    <div className="unilag-glance-section">
      <div className="glance-content-wrapper">
        <div className="glance-content">
          <div className="glance-title">UNILAG at a glance</div>
          <div className="glance-intro">
            For over six decades, UNILAG has provided qualitative and
            research-oriented education to Nigerians and all those who have
            entered its domain in search of knowledge.
          </div>
        </div>
        <div className="glance-image-column">
          <img
            className="glance-image"
            src="https://i.postimg.cc/RVTNfhZk/Rectangle-827685.png"
            alt="UNILAG Campus"
          />
        </div>
      </div>
      <div className="statistics-grid">
        <div className="statistic-item">
          <div className="statistic-number">1962</div>
          <div className="statistic-description">
            the year UNILAG was founded
          </div>
        </div>
        <div className="statistic-item">
          <div className="statistic-number">200,000+</div>
          <div className="statistic-description">alumni worldwide</div>
        </div>
        <div className="statistic-item">
          <div className="statistic-number">323</div>
          <div className="statistic-description">academic professors</div>
        </div>
        <div className="statistic-item">
          <div className="statistic-number">48,680</div>
          <div className="statistic-description">
            undergraduates and postgraduate students in the 2023/2024 academic
            year
          </div>
        </div>
        <div className="statistic-item">
          <div className="statistic-number">19</div>
          <div className="statistic-description">
            research outputs patented within the past three years.
          </div>
        </div>
        <div className="statistic-item">
          <div className="statistic-number">₦50million</div>
          <div className="statistic-description">Grant aid provided.</div>
        </div>
      </div>
    </div>
  );
};

export default UNILAGAtAGlanceSection;