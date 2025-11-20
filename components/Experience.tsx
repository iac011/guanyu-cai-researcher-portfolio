
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, EXPERIENCES } from '../constants';
import { Briefcase, GraduationCap } from 'lucide-react';

interface ExperienceProps {
  language: Language;
}

export const Experience: React.FC<ExperienceProps> = ({ language }) => {
  const t = TRANSLATIONS[language].experience;

  return (
    <section id="experience" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary-500 font-semibold tracking-wide uppercase text-sm mb-2">
            {t.subtitle}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            {t.title}
          </h3>
        </div>

        <div className="relative border-l border-slate-800 ml-4 md:ml-0 md:pl-0 space-y-12 md:space-y-0">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="md:flex items-start relative group">
              
              {/* Timeline Dot with Icon based on Type */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-slate-900 border-2 border-primary-500 rounded-full z-10 items-center justify-center group-hover:scale-110 transition-transform text-primary-400">
                {exp.type === 'Work' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
              </div>
              
              {/* Left Side (Date for odd, Content for even) */}
              <div className={`md:w-1/2 md:pr-12 md:text-right pl-8 md:pl-0 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2 md:!text-left md:!pl-12 md:!pr-0'}`}>
                 {index % 2 === 0 && (
                   <div className="md:hidden absolute left-[-5px] w-3 h-3 bg-primary-500 rounded-full top-2"></div>
                 )}
                 <div className={`${index % 2 !== 0 ? 'hidden md:block' : ''}`}>
                    <h4 className="text-xl font-bold text-white">{exp.role[language]}</h4>
                    <p className="text-primary-400 font-medium mb-2">{exp.company[language]}</p>
                    <p className="text-sm text-slate-500 mb-4 md:hidden">{exp.period[language]}</p>
                    <ul className={`text-slate-400 space-y-2 text-sm ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                      {exp.description[language].map((item, i) => (
                        <li key={i} className="flex md:justify-end items-start">
                          <span className="md:hidden mr-2 text-primary-500">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                 </div>
                 {/* Render Date Only for Alternate Side */}
                 {index % 2 !== 0 && (
                   <div className="md:hidden">
                      <div className="absolute left-[-5px] w-3 h-3 bg-primary-500 rounded-full top-2"></div>
                       <h4 className="text-xl font-bold text-white">{exp.role[language]}</h4>
                       <p className="text-primary-400 font-medium mb-2">{exp.company[language]}</p>
                       <p className="text-sm text-slate-500 mb-4">{exp.period[language]}</p>
                       <ul className="text-slate-400 space-y-2 text-sm">
                         {exp.description[language].map((item, i) => (
                           <li key={i} className="flex items-start">
                             <span className="mr-2 text-primary-500">•</span>
                             {item}
                           </li>
                         ))}
                       </ul>
                   </div>
                 )}
              </div>

              {/* Right Side (Date for even, Content for odd) */}
               <div className={`md:w-1/2 md:pl-12 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1 md:!pr-12 md:!pl-0 md:text-right'}`}>
                  {index % 2 === 0 ? (
                    <div className="hidden md:flex items-center h-full">
                      <span className="text-lg font-mono text-primary-300 py-1 px-3 bg-slate-900 rounded border border-slate-800">
                        {exp.period[language]}
                      </span>
                    </div>
                  ) : (
                     <div className="hidden md:flex items-center justify-end h-full">
                      <span className="text-lg font-mono text-primary-300 py-1 px-3 bg-slate-900 rounded border border-slate-800">
                        {exp.period[language]}
                      </span>
                    </div>
                  )}
               </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
