
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { Mail, Send, MapPin } from 'lucide-react';

interface ContactProps {
  language: Language;
}

export const Contact: React.FC<ContactProps> = ({ language }) => {
  const t = TRANSLATIONS[language].contact;

  return (
    <section className="py-32 bg-slate-950 relative min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary-500 font-semibold tracking-wide uppercase text-sm mb-2">
            {t.subtitle}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            {t.title}
          </h3>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <h4 className="text-xl font-semibold text-white mb-6">
                {t.message}
              </h4>
              
              {/* Main Email */}
              <div className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
                <div className="flex items-center mb-2">
                   <div className="p-2 bg-primary-500/10 rounded-lg text-primary-500 mr-3">
                     <Mail size={20} />
                   </div>
                   <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">{t.emailLabel}</span>
                </div>
                <a href="mailto:guanyu.cai@chimieparistech.psl.eu" className="block text-white font-medium break-all hover:text-primary-400 transition-colors">
                  guanyu.cai@chimieparistech.psl.eu
                </a>
              </div>

              {/* CC Email */}
              <div className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
                <div className="flex items-center mb-2">
                   <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 mr-3">
                     <Mail size={20} />
                   </div>
                   <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">{t.ccLabel}</span>
                </div>
                <a href="mailto:guanyu.cai@ms.xjb.ac.cn" className="block text-white font-medium break-all hover:text-indigo-300 transition-colors">
                  guanyu.cai@ms.xjb.ac.cn
                </a>
              </div>

              <div className="flex items-center text-slate-400 text-sm mt-6">
                 <MapPin size={16} className="mr-2" />
                 Paris, France
              </div>
            </div>

            {/* Mock Form */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="Dr. Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="jane@university.edu"
                />
              </div>
              <div>
                <label htmlFor="msg" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                <textarea 
                  id="msg" 
                  rows={4}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Regarding potential collaboration..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                {t.send}
                <Send size={18} className="ml-2" />
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};
