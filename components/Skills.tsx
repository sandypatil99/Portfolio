
import React from 'react';

const skills = [
  'JavaScript (ES6+)', 'React',
  'HTML5 & CSS3', 'Tailwind CSS', 'Bootstrap', 'Gulp', 'Ruby on Rails', 'PHP', 'MySQL',
  'Git & GitHub', 'Wordpress(Elementor, Gutenberg)', 'SEO'
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Skills">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Skills</h2>
      </div>
      <div>
        <p className="mb-4">Here are some of the technologies I've been working with recently:</p>
        <ul className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <li key={index} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium leading-5 text-teal-300">
                    {skill}
                </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
