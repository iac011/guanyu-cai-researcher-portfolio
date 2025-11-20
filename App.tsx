
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Group } from './components/Group';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { Language } from './types';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [currentView, setCurrentView] = useState('home');

  // Simple transition effect
  const [displayView, setDisplayView] = useState('home');
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (currentView !== displayView) {
      setOpacity(0);
      setTimeout(() => {
        setDisplayView(currentView);
        setOpacity(1);
      }, 200);
    }
  }, [currentView, displayView]);

  const renderView = () => {
    switch (displayView) {
      case 'home':
        return <Hero language={language} setView={setCurrentView} />;
      case 'about':
        return <About language={language} />;
      case 'group':
        return <Group language={language} />;
      case 'experience':
        return <Experience language={language} />;
      case 'projects':
        return <Projects language={language} />;
      case 'contact':
        return <Contact language={language} />;
      default:
        return <Hero language={language} setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-slate-950">
      {/* Background Gradient Mesh - Global */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-700 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-700 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>

      <Navbar 
        language={language} 
        setLanguage={setLanguage} 
        currentView={currentView}
        setView={setCurrentView}
      />

      <main 
        className="flex-grow z-10 transition-opacity duration-200 ease-in-out"
        style={{ opacity }}
      >
        {renderView()}
      </main>

      <Footer language={language} />
      
      {/* AI Chat Assistant */}
      <ChatWidget language={language} />
    </div>
  );
};

export default App;
