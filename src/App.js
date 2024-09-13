import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import RankingSection from './components/RankingSection';
import VCVisionSection from './components/VCVisionSection';
import UNILAGAtAGlanceSection from './components/UNILAGAtAGlanceSection';
import NewsSection from './components/NewsSection';
import EventsSection from './components/EventsSection';
import StudyingAtUnilagSection from './components/StudyingAtUnilagSection';
import MeetOurFacultySection from './components/MeetOurFacultySection';
import ExploreTheCampusSection from './components/ExploreTheCampusSection';
import MustVisitAreasSection from './components/MustVisitAreasSection';
import MeetOurStudentsSection from './components/MeetOurStudentsSection';
import TopResourcesSection from './components/TopResourcesSection'; 
import FooterSection from './components/FooterSection'; // Import FooterSection

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <RankingSection />
      <VCVisionSection />
      <UNILAGAtAGlanceSection />
      <NewsSection />
      <EventsSection />
      <StudyingAtUnilagSection />
      <MeetOurFacultySection />
      <ExploreTheCampusSection />
      <MustVisitAreasSection />
      <MeetOurStudentsSection />
      <TopResourcesSection />
      <FooterSection /> {/* Add FooterSection here */}
      {/* Add other components here */}
    </div>
  );
}

export default App;