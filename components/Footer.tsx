
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Loosely designed in{' '}
        <a href="https://www.figma.com" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener">
          Figma
        </a>{' '}
        and coded in{' '}
        <a href="https://code.visualstudio.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener">
          Visual Studio Code
        </a>
        . Built with{' '}
        <a href="https://nextjs.org/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener">
          Next.js
        </a>{' '}
        and{' '}
        <a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener">
          Tailwind CSS
        </a>
        , deployed with{' '}
        <a href="https://vercel.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener">
          Vercel
        </a>
        . All text is set in the Inter typeface. Design inspired by{' '}
        <a href="https://brittanychiang.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener">
          Brittany Chiang
        </a> and <a href="https://virajc.tech/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener">
          Viraj Chitnis
        </a>.
      </p>
    </footer>
  );
};

export default Footer;
