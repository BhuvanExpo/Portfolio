import React from 'react';
import Hero from '../components/Hero';
import Achievements from '../components/Achievements';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Reveal from '../components/Reveal';

const Home = () => {
  return (
    <>
      <Hero />
      <Reveal width="100%"><About /></Reveal>
      <Reveal width="100%"><Achievements /></Reveal>
      <Reveal width="100%"><Skills /></Reveal>
      <Reveal width="100%"><Contact /></Reveal>
    </>
  );
};

export default Home;