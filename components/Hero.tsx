
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  language: Language;
  setView: (view: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ language, setView }) => {
  const t = TRANSLATIONS[language].hero;

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-start justify-center min-h-screen sm:min-h-[80vh]">
      
      <div className="space-y-8 z-10 max-w-4xl">
        <span className="inline-block py-1 px-3 rounded-full bg-indigo-900/30 border border-indigo-700/50 text-indigo-300 text-sm font-semibold tracking-wide uppercase mb-4">
          Open to Academic Collaboration
        </span>
        
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-[1.1]">
          {t.greeting}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400 mt-2">
            {t.role}
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
          {t.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button 
            onClick={() => setView('projects')}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary-600 text-white font-semibold text-lg hover:bg-primary-500 transition-all shadow-lg shadow-primary-900/20 group"
          >
            {t.ctaPrimary}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          
          <button 
            onClick={() => setView('group')}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-slate-700 text-slate-300 font-semibold text-lg hover:bg-slate-800 hover:text-white transition-all"
          >
            {t.ctaSecondary}
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
    </section>
  );
};
