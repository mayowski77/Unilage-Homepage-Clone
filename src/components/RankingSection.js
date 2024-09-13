import React from 'react';
import '../styles/RankingSection.css'; // Ensure the correct path for your CSS file

const RankingSection = () => {
  return (
    <div className="ranking-section">
      <div className="ranking-content">
        <div className="ranking-header">
          <div className="ranking-stars">
            <span className="ranking-star">★</span>
            <span className="ranking-star">★</span>
            <span className="ranking-star">★</span>
            <span className="ranking-star">★</span>
            <span className="ranking-star">★</span>
          </div>
          <div className="ranking-title">UNILAG Ranking</div>
          <div className="ranking-subtitle">
            According to the 2023 Times Higher Education World University
            Ranking and uniRank African University Ranking of the top recognized
            higher-education institutions
          </div>
          <div className="ranking-logos">
            <img
              src="https://i.postimg.cc/HLBq44CG/THEWORLDRANKINGS.png"
              alt="THE World University Rankings"
            />
            <img
              src="https://i.postimg.cc/fLcFQbxf/uniRank.jpg"
              alt="uniRank"
            />
          </div>
        </div>
        <div className="ranking-metrics">
          <div className="ranking-metric">
            <img
              src="https://i.postimg.cc/Fsrtm0Cd/1-ST-IN-NIGERIA.jpg"
              alt="1st in Nigeria"
            />
            <div className="ranking-description">in Nigeria</div>
          </div>
          <div className="ranking-metric">
            <img
              src="https://i.postimg.cc/fWBCZ254/8th-in-Africa.jpg"
              alt="8th in Africa"
            />
            <div className="ranking-description">in Africa</div>
          </div>
          <div className="ranking-metric">
            <img
              src="https://i.postimg.cc/MKHDG7rn/401-500-in-the-world.jpg"
              alt="401-500 in the world"
            />
            <div className="ranking-description">in the world</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingSection;