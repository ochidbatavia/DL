
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Minus, Sparkles, PhoneCall } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const ProductSupportAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const initialMessage: ChatMessage = { 
    role: 'assistant', 
    content: 'Selamat datang di DJAJA LISTRIK! Saya Djaja Expert AI. Butuh bantuan mencari SKU produk tertentu atau solusi teknis panel Anda?' 
  };
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (customText?: string) => {
    const textToSend = customText || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg = textToSend.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getGeminiResponse(userMsg, messages);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Maaf, sistem sedang sibuk. Silakan coba lagi.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMinimize = () => {
    setIsOpen(false);
  };

  const handleCloseAndReset = () => {
    setIsOpen(false);
    setMessages([initialMessage]);
  };

  const handleContactSalesManual = () => {
    const whatsappUrl = "https://wa.me/628881351844?text=Halo%20Djaja%20Listrik,%20saya%20butuh%20bantuan%20langsung%20dari%20tim%20sales.";
    window.open(whatsappUrl, '_blank');
  };

  const quickActions = [
    "Cari PLC Mitsubishi",
    "MCCB Schneider Ready?",
    "Solusi Hemat Energi",
    "Cara Order"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white rounded-3xl shadow-2xl w-80 sm:w-[400px] flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-8 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2c2c2c] p-5 text-white flex justify-between items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-10">
                <Sparkles size={80} />
            </div>
            <div className="flex items-center space-x-3 relative z-10">
              <div className="w-10 h-10 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-900/20">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-base leading-tight">Djaja Expert AI</h3>
                <div className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse mr-1.5"></span>
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Teknisi Digital Aktif</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1 relative z-10">
              <button 
                onClick={handleMinimize} 
                className="hover:bg-white/10 p-2 rounded-xl transition-colors"
                title="Sembunyikan"
              >
                <Minus className="w-5 h-5" />
              </button>
              <button 
                onClick={handleCloseAndReset} 
                className="hover:bg-white/10 p-2 rounded-xl transition-colors"
                title="Tutup & Reset"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="h-[450px] overflow-y-auto p-5 space-y-6 bg-gray-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-end space-x-2 max-w-[90%] ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mb-1 ${msg.role === 'user' ? 'bg-gray-200' : 'bg-red-50'}`}>
                        {msg.role === 'user' ? <User size={12} className="text-gray-500" /> : <Bot size={12} className="text-red-600" />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm border ${
                    msg.role === 'user' 
                        ? 'bg-red-600 text-white border-transparent rounded-tr-none' 
                        : 'bg-white text-gray-800 border-gray-100 rounded-tl-none'
                    }`}>
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                    </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex items-center space-x-2">
                  <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Menganalisa Spesifikasi...</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions Panel */}
          {messages.length < 3 && !isLoading && (
            <div className="px-5 py-3 flex flex-wrap gap-2 bg-white border-t border-gray-50">
                {quickActions.map(action => (
                    <button 
                        key={action}
                        onClick={() => handleSend(action)}
                        className="text-[10px] font-bold py-1.5 px-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-red-600 hover:text-white transition-all border border-gray-200"
                    >
                        {action}
                    </button>
                ))}
            </div>
          )}

          {/* Input Area */}
          <div className="p-5 bg-white border-t border-gray-100">
            <div className="flex items-center space-x-3 bg-gray-100 rounded-2xl px-4 py-3 focus-within:bg-white focus-within:ring-2 focus-within:ring-red-600 transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Tanya stok, SKU, atau bantuan teknis..."
                className="flex-1 bg-transparent border-none text-sm outline-none placeholder:text-gray-400"
              />
              <button
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="text-red-600 hover:scale-110 disabled:opacity-30 disabled:scale-100 transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-3 flex justify-center">
                <button 
                  onClick={handleContactSalesManual}
                  className="flex items-center text-[10px] font-bold text-gray-400 hover:text-red-600 transition-colors uppercase tracking-widest"
                >
                    <PhoneCall size={10} className="mr-1" /> Hubungi Sales Manual
                </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative"
        >
          <div className="absolute -inset-2 bg-red-600/20 rounded-full blur-lg group-hover:bg-red-600/40 transition-all duration-300"></div>
          <div className="relative bg-red-600 text-white p-4 rounded-2xl shadow-xl flex items-center space-x-3 hover:translate-y-[-4px] transition-transform duration-300">
            <div className="bg-white/20 p-2 rounded-xl">
                <Bot className="w-6 h-6" />
            </div>
            <div className="text-left hidden sm:block">
                <p className="text-[10px] font-bold uppercase opacity-70 leading-none mb-1">Tanya Ahli</p>
                <p className="font-bold text-sm leading-none">Djaja Expert AI</p>
            </div>
            <div className="bg-white w-2 h-2 rounded-full absolute -top-1 -right-1 border-2 border-red-600 animate-ping"></div>
          </div>
        </button>
      )}
    </div>
  );
};

export default ProductSupportAI;
