import React from 'react';
import Projects from '../components/Projects';
import Reveal from '../components/Reveal';

const WebsitesPage = () => {
  return (
    <div className="pt-32 min-h-screen bg-black">
      <Reveal width="100%">
        <Projects />
      </Reveal>
    </div>
  );
};

export default WebsitesPage;