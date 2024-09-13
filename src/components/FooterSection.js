import React from 'react';
import '../styles/FooterSection.css'; // Ensure the correct path for your CSS file

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll effect
    });
  };

  return (
    <div className="footer-section">
      <div className="connect-with-us">
        <div className="connect-title">Connect with us</div>
        <div className="social-icons">
          <button onClick={() => console.log('LinkedIn clicked')}>
            <i className="fab fa-linkedin"></i>
          </button>
          <button onClick={() => console.log('Twitter clicked')}>
            <i className="fab fa-twitter"></i>
          </button>
          <button onClick={() => console.log('Facebook clicked')}>
            <i className="fab fa-facebook"></i>
          </button>
          <button onClick={() => console.log('YouTube clicked')}>
            <i className="fab fa-youtube"></i>
          </button>
          <button onClick={() => console.log('Instagram clicked')}>
            <i className="fab fa-instagram"></i>
          </button>
          <button onClick={() => console.log('TikTok clicked')}>
            <i className="fab fa-tiktok"></i>
          </button>
          <button onClick={() => console.log('Vimeo clicked')}>
            <i className="fab fa-vimeo"></i>
          </button>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-column">
          <div className="footer-logo">
            <img
              src="https://unilag.edu.ng/wp-content/uploads/Group-1.png"
              alt="University of Lagos Logo"
            />
          </div>
          <div className="about-unilag">About UNILAG</div>
          <p>
            The University of Lagos, established in 1962, has over five decades
            of qualitative and research-oriented education, contributing
            immensely to the growth and development of Nigeria.
          </p>
        </div>
        <div className="footer-column">
          <div className="quick-links">
            <div className="links-header">Quick Links</div>
            <ul>
              <li>Admission</li>
              <li>Enterprises</li>
              <li>Records</li>
              <li>UNILAG AFRETEC</li>
              <li>UNILAG Intranet</li>
              <li>UNILAG Payment Portal</li>
              <li>UNILAG Quality Assurance Policy</li>
              <li>UNILAG Service Charter</li>
            </ul>
          </div>
          <div className="get-in-touch">
            <div className="links-header">Get in Touch</div>
            <ul>
              <li>Contact Us</li>
              <li>Give to UNILAG</li>
              <li>Prospective Postgraduate Students</li>
              <li>Prospective Undergraduate Students</li>
              <li>Stakeholder Links</li>
              <li>UNILAG Pocket Statistics</li>
              <li>Vacancies (Careers)</li>
            </ul>
          </div>
        </div>
        <div className="footer-column">
          <div className="access-university">
            <div className="links-header">Access the University</div>
            <ul>
              <li>Institutionary Repository</li>
              <li>Library</li>
              <li>Parents</li>
              <li>Records</li>
              <li>Staff</li>
              <li>Students</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">© 2023 University of Lagos</div>
        <div className="back-to-top">
          <button onClick={scrollToTop}>
            <i className="fas fa-arrow-up"></i>
            Back to Top
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;