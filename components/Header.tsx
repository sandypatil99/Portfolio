
import React, { useState, useEffect } from 'react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { TwitterIcon } from './icons/TwitterIcon';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const sections = NAV_ITEMS.map(item => document.getElementById(item.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">Sandesh Patil</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Web Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I build exceptional and accessible digital experiences for the web.
        </p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a className="group flex items-center py-3" href={`#${item.id}`}>
                  <span
                    className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${
                      activeSection === item.id ? 'w-16 bg-slate-200' : ''
                    }`}
                  ></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                      activeSection === item.id ? 'text-slate-200' : ''
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
             <li>
                <a className="group flex items-center py-3" href="https://sandeshpatil.in" target="_blank" rel="noopener noreferrer">
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
                    Blog
                  </span>
                </a>
              </li>
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        <li className="mr-5 text-xs">
          <a href="https://github.com/sandypatil99" target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="block hover:text-slate-200">
            <GithubIcon />
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a href="https://www.linkedin.com/in/sandeshpatil10/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="block hover:text-slate-200">
            <LinkedinIcon />
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a href="https://x.com/SandeshPat54955" target="_blank" rel="noreferrer noopener" aria-label="Twitter" className="block hover:text-slate-200">
            <TwitterIcon />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
