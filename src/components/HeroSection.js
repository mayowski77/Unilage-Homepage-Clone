import React, { useEffect } from 'react';
import '../styles/HeroSection.css'; // Ensure the correct path for your CSS file

const HeroSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-section");
      const scrollPosition = window.scrollY;
      const opacity = 1 - scrollPosition / 500; // Adjust the divisor for desired fade effect
      heroSection.style.opacity = opacity < 0 ? 0 : opacity; // Prevent negative opacity
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: "url('https://i.postimg.cc/jqMq15C6/image.jpg')"
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-motto">IN DEED AND IN TRUTH</div>
        <div className="hero-rating">
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
        </div>
        <div className="hero-title">The Nation's Pride</div>
        <div className="hero-subtitle">
          A domain of knowledge and legacy of excellence, instrumental in the
          production of academia with tremendous impact in Nigeria.
        </div>
        <div className="hero-bottom-subtitles">
          <div className="hero-left-bottom">
            <strong>Located in Lagos, Nigeria</strong>
          </div>
          <div className="hero-right-bottom">
            <strong>Impacting across the world</strong>
          </div>
        </div>
        <div className="hero-bottom-subtitles-2">
          <div className="hero-left-bottom-2">
            In pursuit of service to humanity
          </div>
          <div className="hero-right-bottom-2">60+ years of serving</div>
        </div>
      </div>
      <div className="hero-lines"></div>
    </div>
  );
};

export default HeroSection;