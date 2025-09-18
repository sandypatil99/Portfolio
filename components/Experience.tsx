
import React from 'react';
import type { ExperienceItem } from '../types';

const experienceData: ExperienceItem[] = [
  {
    role: 'Web Developer Intern',
    company: 'Amura Marketing Technologies',
    duration: 'March 2025 - PRESENT',
    description: [
      'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, and more.',
      'Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements.',
      'Collaborate with designers, project managers, and other engineers to transform creative concepts into production-ready software.'
    ],
  },
  {
    role: 'Full Stack Web Developer Trainee',
    company: 'Nxt Level Academy',
    duration: 'Nov 2024 - Feb 2025',
    description: [
      'Developed and maintained critical components of the company\'s flagship SaaS product using React and Node.js.',
      'Engineered and maintained major features of Starry’s customer-facing web app using ES6, Handlebars, Backbone, Marionette, and CSS.',
      'Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Starry’s iOS and Android mobile apps.',
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'Unified Mentor',
    duration: 'Sep 2014 - Oct 2024',
    description: [
      'Built and styled client websites from Photoshop mockups, using HTML, CSS, and JavaScript.',
      'Worked with a team of three developers to build a marketing website and e-commerce platform for an enterprise-level client.',
      'Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness.'
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
      </div>
      <div>
        <ol className="group/list">
          {experienceData.map((item, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={item.duration}>
                  {item.duration}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <span className="inline-block font-medium text-white">
                        {item.role} · {item.company}
                      </span>
                    </div>
                  </h3>
                  <ul className="mt-2 list-disc pl-5 text-sm">
                    {item.description.map((desc, i) => (
                      <li key={i} className="mb-2">{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
