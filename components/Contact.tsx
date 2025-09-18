
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Contact me">
       <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Contact</h2>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">Get In Touch</h2>
        <p className="mt-4 max-w-xl mx-auto leading-relaxed">
          I'm currently looking for new opportunities, both freelance and full-time. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a 
          href="mailto:contact@sandeshpatil.in" 
          className="mt-8 inline-block rounded-md bg-teal-400/10 px-6 py-3 font-medium text-teal-300 hover:bg-teal-400/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition-colors"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
