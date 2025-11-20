
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, PROJECTS } from '../constants';
import { ExternalLink, FileText } from 'lucide-react';

interface ProjectsProps {
  language: Language;
}

export const Projects: React.FC<ProjectsProps> = ({ language }) => {
  const t = TRANSLATIONS[language].projects;

  return (
    <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-blue-900/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary-500 font-semibold tracking-wide uppercase text-sm mb-2">
            {t.subtitle}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            {t.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-primary-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-90"></div>
                <div className="absolute top-4 left-4 px-2 py-1 bg-slate-950/80 backdrop-blur text-xs font-bold text-white rounded border border-slate-700">
                    {project.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-sm mb-4 flex-grow leading-relaxed">
                  {project.description[language]}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-md font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                  {/* For Research projects, these links might act differently, simplified for now */}
                  <a 
                    href={project.link} 
                    className="flex items-center text-slate-400 hover:text-white text-sm transition-colors"
                    onClick={(e) => e.preventDefault()} // Placeholder
                  >
                    <FileText size={16} className="mr-1.5" />
                    {t.sourceCode}
                  </a>
                  <a 
                    href={project.link}
                    className="flex items-center text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors"
                    onClick={(e) => e.preventDefault()} // Placeholder
                  >
                    {t.viewProject}
                    <ExternalLink size={16} className="ml-1.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
