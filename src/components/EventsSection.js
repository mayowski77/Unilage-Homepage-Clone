import React from 'react';
import '../styles/EventsSection.css'; // Ensure the correct path for your CSS file

const EventsSection = () => {
  return (
    <div className="events-section">
      <div className="events-header">
        <div className="events-header-title">Events</div>
        <div className="events-header-subtitle">
          Concerts, lectures, sport events and more
        </div>
      </div>
      <div className="events-grid">
        <div className="events-left">
          <div className="top-left">
            <div style={{ fontSize: "48px" }}>09 SEP</div>
            <div className="event-heading">
              UNILAG to host African Engineering Education Forum
            </div>
            <div className="event-subheading">Engineering Hall III</div>
          </div>
          <div className="top-middle">
            <div style={{ fontSize: "48px" }}>09 SEP</div>
            <div className="event-heading">
              UNILAG to host African Engineering Education Forum
            </div>
            <div className="event-subheading">Engineering Hall III</div>
          </div>
          <div className="bottom-left">
            <div className="date-box">09 SEP</div>
            <div className="event-heading">
              UNILAG to host African Engineering Education Forum
            </div>
            <div className="event-subheading">Engineering Hall III</div>
          </div>
        </div>
        <div className="right-section">
          <div className="date-box">25 OCT</div>
          <div className="event-heading">
            UNILAG to host African Engineering Education Forum
          </div>
          <div className="event-subheading">Engineering Hall III</div>
          <div className="event-paragraph">
            Three students of the University of Lagos (UNILAG) have developed
            software to unmask human traffickers, track and rescue victims while
            also creating awareness about the odious industry.
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;