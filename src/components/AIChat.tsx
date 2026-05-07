import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { getAIChatResponse } from '../services/geminiService';
import { cn } from '../lib/utils';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm your Quartz assistant. How can I help with your project today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

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

  return (
    <>
      {/* Floating Button */}
      <button
        id="ai-chat-toggle"
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 w-14 h-14 bg-accent text-white rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95",
          isOpen && "scale-0 pointer-events-none"
        )}
      >
        <MessageSquare size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 w-[calc(100vw-3rem)] md:w-96 h-[500px] bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-[#E5E2DC] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-accent text-white flex justify-between items-center bg-gradient-to-r from-accent to-[#B4945E]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Bot size={22} />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-widest">Quartz AI</p>
                  <p className="text-[10px] text-white/70 font-bold uppercase tracking-tight italic">Design Assistant</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
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
