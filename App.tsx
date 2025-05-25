
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ABOUT_DATA, CONTACT_DATA, EXPERIENCE_DATA, HERO_DATA, NAV_LINKS, PROJECTS_DATA, SKILLS_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-light text-dark min-h-screen">
      <Navbar navLinks={NAV_LINKS} name={HERO_DATA.name} />
      <main>
        <Hero heroData={HERO_DATA} />
        <About aboutData={ABOUT_DATA} />
        <Experience experienceData={EXPERIENCE_DATA} />
        <Projects projectsData={PROJECTS_DATA} />
        <Skills skillsData={SKILLS_DATA} />
        <Contact contactData={CONTACT_DATA} />
      </main>
      <Footer name={HERO_DATA.name} contactData={CONTACT_DATA} />
    </div>
  );
};

export default App;
