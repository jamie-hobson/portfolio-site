import React from 'react';
import { useRef } from 'react';
import { useScroll } from 'framer-motion';

import Hero from './sections/Hero';
import Navbar from './components/Navbar';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const { scrollY } = useScroll();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <div className="bg-backgroundBlueGrey font-inter overflow-x-clip">
        <Navbar homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} experienceRef={experienceRef} skillsRef={skillsRef} contactRef={contactRef} scrollY={scrollY}/>
        <div ref={homeRef} />
        <Hero homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} experienceRef={experienceRef} skillsRef={skillsRef} contactRef={contactRef} />
        <div ref={aboutRef} />
        <About />
        <div ref={projectsRef} />
        <Projects />
        <div ref={experienceRef} />
        <Experience />
        <div ref={skillsRef} />
        <Skills />
        <div ref={contactRef} />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
