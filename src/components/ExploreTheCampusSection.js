import React, { useState, useEffect } from 'react';
import '../styles/ExploreTheCampusSection.css'; // Ensure the correct path for your CSS file

const ExploreTheCampusSection = () => {
  const images = [
    "https://i.postimg.cc/RVTNfhZk/Rectangle-827685.png",
    "https://i.postimg.cc/L5DDVF4V/1c6d6ac8-2c99-491b-8a91-19215a0b50ae.jpg",
    "https://i.postimg.cc/PJFjFc2m/Rectangle-9.png",
    "https://i.postimg.cc/4NtJ4M9L/explorecampus4.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="explore-campus-section">
      <div className="explore-title">Explore the campus</div>
      <div className="explore-subtitle">
        See the vibrancy of campus life at UNILAG by exploring its schools,
        programs, institutes, and libraries
      </div>
      <div className="explore-instruction">
        Click on image to expand and explore
      </div>
      <div className="slideshow-container">
        <img
          src={images[currentIndex]}
          alt="UNILAG Campus"
          className="explore-image"
        />
        <div className="explore-navigation">
          <button className="nav-arrow left-arrow" onClick={goToPreviousSlide}>
            ←
          </button>
          <button className="nav-arrow right-arrow" onClick={goToNextSlide}>
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreTheCampusSection;
