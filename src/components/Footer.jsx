import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <span className="text-2xl font-bold gradient-text">SP</span>
                        <p className="mt-2 text-gray-500 text-sm">
                            © {new Date().getFullYear()} Sandesh Patil. All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-600 text-[10px] uppercase tracking-widest font-medium">
                    Designed & Built with React & Tailwind CSS
                </div>
            </div>
        </footer>
    );
};

export default Footer;
