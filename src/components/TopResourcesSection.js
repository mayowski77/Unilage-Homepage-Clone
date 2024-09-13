import React from 'react';
import '../styles/TopResourcesSection.css'; // Ensure the correct path for your CSS file

const TopResourcesSection = () => {
  return (
    <div className="top-resources-section">
      <div className="resources-header">
        <div className="resources-title">Find top resources</div>
        <div className="see-all">
          <span>See all resources</span>
          <span className="arrow-icon">➜</span>
        </div>
      </div>
      <hr className="divider" />
      <div className="resources-list">
        <div className="resource-column">
          <ul>
            <li>Our campus</li>
            <li>Addresses</li>
            <li>Newsletters</li>
          </ul>
        </div>
        <div className="resource-column">
          <ul>
            <li>Conference</li>
            <li>Public lectures</li>
            <li>Journals</li>
          </ul>
        </div>
        <div className="resource-column">
          <ul>
            <li>Publications</li>
            <li>UNILAG LMS (LagOnline)</li>
            <li>UNILAG career structure</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopResourcesSection;