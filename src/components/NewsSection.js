import React from 'react';
import '../styles/NewsSection.css'; // Ensure the correct path for your CSS file

const NewsSection = () => {
  return (
    <div className="news-section">
      <div className="news-title">News</div>
      <div className="news-subtitle">Updates from across the university</div>
      <div className="news-grid">
        <div className="news-item">
          <img
            src="https://i.postimg.cc/ZCRJHgvd/UNILAG-GATE-1-300x169.jpg"
            alt="UNILAG Entrance"
          />
          <div className="news-headline">
            UNILAG Invites Applications for Appointment of University...
          </div>
          <div className="news-description">
            Applications are invited from suitably qualified candidates for the
            post of University Librarian, which will be vacant in the
            University...
          </div>
        </div>
        <div className="news-item">
          <img
            src="https://i.postimg.cc/Z0jTrZnm/UNILAG-GATE-1-300x169-1.jpg"
            alt="UNILAG Registrar"
          />
          <div className="news-headline">
            UNILAG Invites Applications for Appointment of Registrar
          </div>
          <div className="news-description">
            The Governing Council of the University of Lagos invites suitably
            qualified candidates to apply for the post of REGISTRAR,...
          </div>
        </div>
        <div className="news-item">
          <img
            src="https://i.postimg.cc/tnRpLvr8/Vacancy-300x150.jpg"
            alt="Vacancy Announcement"
          />
          <div className="news-headline">
            Vacancy: Chief (Dr.) Mike Adenuga (Jnr.) Professorial...
          </div>
          <div className="news-description">
            The University of Lagos hereby invites suitably qualified candidates
            to fill the Chief (Dr.) Mike Adenuga (Jnr.) Professorial Chair in...
          </div>
        </div>
        <div className="news-item">
          <img
            src="https://i.postimg.cc/SjmS2jyV/Important-Notice-Gold-300x150.jpg"
            alt="Important Notice"
          />
          <div className="news-headline">
            Matriculation Ceremony of UNILAG Sandwich Programme Holds,…
          </div>
          <div className="news-description">
            The Matriculation Ceremony for students of the University of Lagos
            (UNILAG) Sandwich Programme will hold on Friday, September 13, 2024…
          </div>
        </div>
        <div className="news-item">
          <img
            src="https://i.postimg.cc/KRHxHNts/Important-Notice-Maroon-300x150.jpg"
            alt="Important Notice"
          />
          <div className="news-headline">
            Statistics Department Holds Monthly Seminar, Sept 18
          </div>
          <div className="news-description">
            The September 2024 Seminar of the Department of Statistics, Faculty
            of Science, University of Lagos (UNILAG) will hold on Wednesday,…
          </div>
        </div>
        <div className="news-item">
          <img
            src="https://i.postimg.cc/5XQbdC39/Whats-App-Image-2024-09-09-at-10.jpg"
            alt="Important Notice"
          />
          <div className="news-headline">
            UNILAG Activates Staff Eligibility Link Ahead of…
          </div>
          <div className="news-description">
            The staff eligibility platform for the Congregation Meeting and
            Election slated for Thursday, September 12, 2024 has been activated.
            All…
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;