
import React, { useState, useRef, useEffect } from 'react';
import { Language, ChatMessage } from '../types';
import { TRANSLATIONS } from '../constants';
import { generateChatResponse } from '../services/geminiService';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';

interface ChatWidgetProps {
  language: Language;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const t = TRANSLATIONS[language].chat;

  // Initialize chat with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ role: 'model', text: t.welcome }]);
    }
  }, [language, t.welcome]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue.trim();
    setInputValue('');
    
    // Add user message immediately
    const newMessages: ChatMessage[] = [...messages, { role: 'user', text: userMsg }];
    setMessages(newMessages);
    setIsLoading(true);

    // Prepare history for Gemini (convert to API format)
    // We exclude the last message because it is sent as the 'message' argument
    const historyForApi = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    try {
      // Call Gemini Service
      const responseText = await generateChatResponse(userMsg, historyForApi);
      setMessages(prev => [...prev, { role: 'model', text: responseText || "Error generating response." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 flex items-center justify-center p-4 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-500 transition-all duration-300 hover:scale-110 group ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open Chat"
      >
        <MessageSquare size={24} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 whitespace-nowrap font-medium">
          {t.trigger}
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-[400px] h-[600px] max-h-[80vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-700 to-primary-900 p-4 flex items-center justify-between border-b border-primary-800">
            <div className="flex items-center text-white">
              <Sparkles size={18} className="mr-2 text-yellow-300" />
              <h3 className="font-semibold">{t.title}</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-950/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-primary-600 text-white rounded-tr-none' 
                      : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 px-4 py-3 rounded-2xl rounded-tl-none border border-slate-700">
                  <Loader2 size={18} className="animate-spin text-primary-400" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-900 border-t border-slate-800">
            <div className="relative">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t.placeholder}
                className="w-full bg-slate-950 text-white border border-slate-700 rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                disabled={isLoading}
              />
              <button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-primary-500 hover:text-primary-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-slate-500 text-center mt-2">
              {t.disclaimer}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
