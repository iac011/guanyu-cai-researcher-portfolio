
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, SKILLS } from '../constants';
import { Users, Target, GraduationCap, ArrowRight } from 'lucide-react';

interface GroupProps {
  language: Language;
}

export const Group: React.FC<GroupProps> = ({ language }) => {
  const t = TRANSLATIONS[language].group;

  return (
    <section className="py-32 bg-slate-950 min-h-screen relative overflow-hidden">
       {/* Background blur */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-primary-500 font-semibold tracking-wide uppercase text-sm mb-2">
            {t.subtitle}
          </h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Research Focus Area */}
          <div className="lg:col-span-2 space-y-8">
             <h3 className="text-2xl font-bold text-white flex items-center">
               <Target className="mr-3 text-primary-500" />
               {t.focusTitle}
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {SKILLS.slice(0, 4).map((skill, idx) => (
                 <div key={idx} className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-primary-500/30 transition-all">
                    <skill.icon className="text-primary-400 mb-4" size={32} />
                    <h4 className="text-lg font-semibold text-white mb-2">{skill.name}</h4>
                    <p className="text-slate-400 text-sm">
                      Advanced investigation into {skill.name.toLowerCase()} for next-generation applications.
                    </p>
                 </div>
               ))}
             </div>
          </div>

          {/* Recruitment / Team Info */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 p-8 rounded-2xl h-fit">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Users className="mr-3 text-primary-500" />
              {t.positionsTitle}
            </h3>
            <div className="space-y-6">
              <div className="bg-primary-900/20 border border-primary-500/20 p-4 rounded-lg">
                <div className="flex items-center mb-2 text-primary-400 font-semibold">
                  <GraduationCap className="mr-2" size={18} />
                  PhD Students & Postdocs
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {t.positions}
                </p>
              </div>
              
              <div className="pt-4 border-t border-slate-800">
                <h4 className="text-white font-medium mb-2">Principal Investigator</h4>
                <p className="text-primary-400 font-bold text-lg">Guanyu Cai, Ph.D.</p>
                <p className="text-slate-500 text-sm">CNRS - IRCP</p>
              </div>

              <a href="mailto:guanyu.cai@chimieparistech.psl.eu" className="block w-full text-center bg-white text-slate-950 font-bold py-3 rounded-lg hover:bg-slate-200 transition-colors">
                Contact Leader
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
