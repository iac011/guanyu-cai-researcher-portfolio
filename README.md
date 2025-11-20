
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, SKILLS, AWARDS } from '../constants';
import { Trophy } from 'lucide-react';

interface AboutProps {
  language: Language;
}

export const About: React.FC<AboutProps> = ({ language }) => {
  const t = TRANSLATIONS[language].about;

  return (
    <section id="about" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text Content & Awards */}
          <div>
            <h2 className="text-primary-500 font-semibold tracking-wide uppercase text-sm mb-2">
              {t.subtitle}
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {t.title}
            </h3>
            <div className="space-y-4 text-slate-400 leading-relaxed text-lg mb-10">
              {t.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Awards Section */}
            <div className="mt-8">
               <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                 <Trophy className="text-yellow-500 mr-2" size={20}/>
                 {t.awardsTitle}
               </h4>
               <ul className="space-y-3">
                 {AWARDS.map((award, idx) => (
                   <li key={idx} className="flex items-start text-slate-300">
                     <span className="text-primary-400 font-mono mr-3 min-w-[50px]">{award.year}</span>
                     <span>{award.title[language]}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm lg:sticky lg:top-24">
            <h4 className="text-xl font-bold text-white mb-6">{t.skillsTitle}</h4>
            <div className="grid grid-cols-1 gap-6">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <skill.icon className="text-primary-400 mr-3" size={20} />
                      <span className="text-slate-200 font-medium">{skill.name}</span>
                    </div>
                    <span className="text-xs text-slate-500 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary-600 to-purple-500 rounded-full transition-all duration-1000 group-hover:shadow-[0_0_10px_rgba(14,165,233,0.5)]"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
