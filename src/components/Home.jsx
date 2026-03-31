import React from 'react';
import HeroCanvas from './HeroCanvas';
import About from './About';
import WorkProcess from './WorkProcess';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';

export default function Home() {
  return (
    <>
      <HeroCanvas />
      <About />
      <WorkProcess />
      <Portfolio />
      <Blog />
      <Contact />
    </>
  );
}
