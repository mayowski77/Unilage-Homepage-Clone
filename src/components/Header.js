import React from 'react';
import '../styles/Header.css'

const Header = () => {
  return (
    <div>
      <TopBar />
      <div className="header-container">
        <MainHeader />
        <Navigation />
      </div>
    </div>
  );
};

const TopBar = () => {
    return (
      <div className="top-bar">
        <span>Communicationunit@unilag.edu.ng</span>
        <div className="top-bar-links">
          <a href="#staff">Staff</a>
          <span className="link-separator">|</span>
          <a href="#students">Students</a>
          <span className="link-separator">|</span>
          <a href="#alumni">Alumni</a>
          <span className="link-separator">|</span>
          <a href="#parents">Parents</a>
          <span className="link-separator">|</span>
          <a href="#give">Give to Unilag</a>
          <span className="link-separator">|</span>
          <a href="#fasu">FASU 2024</a>
          <span className="search-icon">🔍</span>
        </div>
      </div>
    );
  };
  

const MainHeader = () => {
  return (
    <div className="main-header">
      <div className="logo">
        <img
          src="https://unilag.edu.ng/wp-content/uploads/Group-1.png"
          alt="University of Lagos Logo"
        />
      </div>
    </div>
  );
};

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="nav-item">
        ACADEMICS <span>▼</span>
      </div>
      <div className="nav-item">ABOUT US</div>
      <div className="nav-item">UNITS</div>
      <div className="nav-item">RESEARCH INNOVATION</div>
      <div className="nav-item">RESOURCES</div>
      <div className="nav-item">ADMISSIONS</div>
      <div className="nav-item">ENTERPRISES</div>
      <div className="nav-item">POLICIES</div>
      <div className="nav-item">TETFUND</div>
    </div>
  );
};

export default Header;