import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, X, Minimize2, Maximize2, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import Button from './Button';

const AiDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm your Web Design Inc Virtual Assistant. I can help organize your leads, schedule appointments, or answer questions about the platform. How can I help you today?", timestamp: Date.now() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Pass history excluding the latest user message which is sent as the prompt
      const responseText = await sendMessageToGemini(userMsg.text, messages);
      
      const aiMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error("Failed to send message", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Minimized State
  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-16 h-16 bg-brand-600 hover:bg-brand-700 text-white rounded-full shadow-lg transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brand-300"
        >
          <Sparkles className="w-8 h-8 animate-pulse" />
          <span className="absolute right-0 top-0 flex h-4 w-4 -mt-1 -mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
          </span>
          <div className="absolute bottom-full right-0 mb-3 w-48 bg-white p-3 rounded-xl shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none transform translate-y-2 group-hover:translate-y-0">
            <p className="text-xs font-medium text-slate-700">Try the AI Assistant Demo!</p>
          </div>
        </button>
      </div>
    );
  }

  // Expanded State
  return (
    <div className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] md:h-[600px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-brand-600 p-4 flex items-center justify-between text-white shrink-0">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-lg">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Web Design Inc Assistant</h3>
            <p className="text-xs text-brand-100 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Online Now
            </p>
          </div>
        </div>
        <div className="flex gap-2">
           <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-slate-200' : 'bg-brand-100 text-brand-600'}`}>
              {msg.role === 'user' ? <User className="w-5 h-5 text-slate-600" /> : <Bot className="w-5 h-5" />}
            </div>
            <div
              className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-brand-600 text-white rounded-tr-none'
                  : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
           <div className="flex items-start gap-3">
             <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
               <Bot className="w-5 h-5 text-brand-600" />
             </div>
             <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm">
                <Loader2 className="w-5 h-5 animate-spin text-brand-600" />
             </div>
           </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-slate-100 shrink-0">
        <div className="flex gap-2 relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about leads, scheduling, or pricing..."
            disabled={isLoading}
            className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-sm"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-2 top-2 p-1.5 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50 disabled:hover:bg-brand-600 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-[10px] text-center text-slate-400 mt-2">
          Powered by Gemini AI • 24/7 Virtual Assistance
        </p>
      </div>
    </div>
  );
};

export default AiDemo;