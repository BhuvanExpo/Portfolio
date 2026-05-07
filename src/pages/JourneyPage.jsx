import React from 'react';
import Journey from '../components/Journey';
import Reveal from '../components/Reveal';

const JourneyPage = () => {
  return (
    <div className="pt-32 min-h-screen bg-black">
      <Reveal width="100%">
        <Journey />
      </Reveal>
    </div>
  );
};

export default JourneyPage;