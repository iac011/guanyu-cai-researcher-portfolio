
import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  currentView: string;
  setView: (view: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ language, setLanguage, currentView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = TRANSLATIONS[language].nav;

  const navLinks = [
    { name: t.home, id: 'home' },
    { name: t.about, id: 'about' },
    { name: t.group, id: 'group' },
    { name: t.experience, id: 'experience' },
    { name: t.projects, id: 'projects' },
    { name: t.contact, id: 'contact' },
  ];

  const toggleLanguage = () => {
    if (language === Language.EN) setLanguage(Language.CN);
    else if (language === Language.CN) setLanguage(Language.FR);
    else setLanguage(Language.EN);
  };

  const handleNavClick = (id: string) => {
    setView(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 shadow-lg transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-2xl tracking-tighter text-primary-400 cursor-pointer" onClick={() => handleNavClick('home')}>
            GC.
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.id)}
                  className={`${
                    currentView === link.id 
                      ? 'text-white bg-slate-800' 
                      : 'text-slate-300 hover:text-primary-400 hover:bg-slate-800/50'
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                >
                  {link.name}
                </button>
              ))}
              
              {/* Language Switcher Desktop */}
              <button 
                onClick={toggleLanguage}
                className="ml-4 flex items-center space-x-1 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1 rounded-full text-xs font-bold transition-colors border border-slate-700"
              >
                <Globe size={14} />
                <span>{language}</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className={`${
                  currentView === link.id ? 'text-white bg-slate-800' : 'text-slate-300'
                } w-full text-left block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800 hover:text-white`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => { toggleLanguage(); }}
              className="w-full text-left flex items-center space-x-2 text-slate-300 hover:text-white px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800"
            >
               <Globe size={16} />
               <span>Switch Language ({language})</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
