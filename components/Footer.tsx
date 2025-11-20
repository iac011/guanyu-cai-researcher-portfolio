import React from 'react';
import { Language } from '../types';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-900 text-center">
      <p className="text-slate-500 text-sm">
        © {year} Guanyu Cai. All rights reserved.
      </p>
      <div className="mt-2 flex justify-center space-x-4 text-xs text-slate-600">
        {/* Using links to source code or generic links */}
        <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
        <span>|</span>
        <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
      </div>
    </footer>
  );
};