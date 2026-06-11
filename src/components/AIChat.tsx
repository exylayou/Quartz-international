import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  Loader2, 
  Phone, 
  Mail, 
  Calculator, 
  MessageCircle, 
  HelpCircle 
} from 'lucide-react';
import { getAIChatResponse } from '../services/geminiService';
import { cn } from '../lib/utils';
import { useLocation } from 'react-router-dom';
import { useCalculator } from '../context/CalculatorContext';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const AIChat: React.FC = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hi! I\'m your Quartz International assistant. How can I help with your project today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const { openCalculator } = useCalculator();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const handleOpenChat = () => {
      setIsMenuOpen(false);
      setIsChatOpen(true);
    };
    window.addEventListener('open-ai-chat', handleOpenChat);
    return () => window.removeEventListener('open-ai-chat', handleOpenChat);
  }, []);

  if (isAdmin) return null;

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    // Format history for Gemini SDK
    const history = messages.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const response = await getAIChatResponse(userMessage, history);
    
    setMessages(prev => [...prev, { role: 'model', text: response || 'I missed that. Could you try again?' }]);
    setIsLoading(false);
  };

  const handleSelectEstimate = () => {
    setIsMenuOpen(false);
    openCalculator();
  };

  const menuItems = [
    {
      id: 'ai-assistant',
      icon: <Bot size={18} />,
      label: 'AI Kitchen Assistant',
      subtext: 'Get instant design & price answers',
      onClick: () => {
        setIsMenuOpen(false);
        setIsChatOpen(true);
      }
    },
    {
      id: 'whatsapp',
      icon: <MessageCircle size={18} />,
      label: 'WhatsApp Us',
      subtext: 'Direct text: (647) 370-6938',
      onClick: () => {
        setIsMenuOpen(false);
        window.open('https://wa.me/16473706938', '_blank');
      }
    },
    {
      id: 'call',
      icon: <Phone size={18} />,
      label: 'Call Us',
      subtext: 'Speak with an expert: (647) 370-6938',
      onClick: () => {
        setIsMenuOpen(false);
        window.location.href = 'tel:6473706938';
      }
    },
    {
      id: 'email',
      icon: <Mail size={18} />,
      label: 'Email Us',
      subtext: 'info@quartzinternational.ca',
      onClick: () => {
        setIsMenuOpen(false);
        window.location.href = 'mailto:info@quartzinternational.ca';
      }
    },
    {
      id: 'estimate',
      icon: <Calculator size={18} />,
      label: 'Get Instant Estimate',
      subtext: 'Calculate your kitchen budget in 30s',
      onClick: handleSelectEstimate
    }
  ];

  return (
    <>
      {/* Click Outside Overlay to Close Contact Menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 cursor-default" 
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Floating Action Button (FAB) */}
      <button
        id="contact-menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={cn(
          "fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 w-14 h-14 bg-accent text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 bg-gradient-to-r from-accent to-[#B4945E]",
          isChatOpen && "scale-0 pointer-events-none"
        )}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isMenuOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {isMenuOpen ? <X size={24} /> : <HelpCircle size={24} />}
        </motion.div>
      </button>

      <AnimatePresence>
        {/* Floating Contact Menu Popover */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-[10.5rem] right-6 md:bottom-[6.5rem] md:right-8 z-50 w-[calc(100vw-3rem)] md:w-80 bg-[#1A1A1A]/95 backdrop-blur-md rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-accent/20 overflow-hidden flex flex-col"
          >
            {/* Menu Header */}
            <div className="p-5 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A]">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">Need Help?</p>
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">We are online now</p>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-7 h-7 rounded-full hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <X size={14} />
              </button>
            </div>

            {/* Menu List Items */}
            <div className="flex flex-col">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={item.onClick}
                  className="w-full flex items-center gap-4 p-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0 text-left group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-grow">
                    <p className="text-xs font-bold text-white uppercase tracking-wider group-hover:text-accent transition-colors">
                      {item.label}
                    </p>
                    <p className="text-[10px] text-gray-400 font-medium tracking-tight mt-0.5">
                      {item.subtext}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {/* AI Chat Assistant Drawer */}
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 w-[calc(100vw-3rem)] md:w-96 h-[500px] bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-[#E5E2DC] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-accent text-white flex justify-between items-center bg-gradient-to-r from-accent to-[#B4945E]">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => {
                    setIsChatOpen(false);
                    setIsMenuOpen(true);
                  }}
                  className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors mr-1"
                  title="Back to Contact Menu"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <Bot size={22} />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-widest leading-none">AI Kitchen</p>
                  <p className="text-[10px] text-white/70 font-bold uppercase tracking-tight italic mt-1 leading-none">Design Assistant</p>
                </div>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
                id="close-ai-chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#FCFBFA]"
            >
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "flex flex-col max-w-[85%]",
                    msg.role === 'user' ? "ml-auto items-end" : "mr-auto items-start"
                  )}
                >
                  <div className={cn(
                    "p-4 rounded-2xl text-xs leading-relaxed font-medium",
                    msg.role === 'user' 
                      ? "bg-accent text-white rounded-tr-none" 
                      : "bg-white border border-[#E5E2DC] text-gray-800 rounded-tl-none shadow-sm"
                  )}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-gray-400">
                  <Loader2 size={14} className="animate-spin" />
                  <span className="text-[10px] font-bold uppercase tracking-widest italic">Thinking...</span>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-[#E5E2DC]">
              <div className="relative group">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about handles, colors, or materials..."
                  className="w-full bg-gray-50 border border-[#E5E2DC] rounded-2xl px-5 py-3 pr-12 text-xs font-bold focus:outline-none focus:border-accent transition-colors"
                  id="ai-chat-input"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-accent text-white rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:grayscale"
                  id="send-ai-message"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
