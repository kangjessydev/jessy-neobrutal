'use client';
import React, { useState, useEffect } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import Button from '@/components/ui/Button';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [parent] = useAutoAnimate();

  const toggleChat = () => setIsOpen(!isOpen);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const chatWindow = document.getElementById('chat-window');
      const trigger = document.getElementById('chat-trigger');
      if (isOpen && chatWindow && !chatWindow.contains(event.target as Node) && !trigger?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={parent} className="fixed bottom-6 right-6 z-50 font-lexend print:hidden flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div 
          id="chat-window" 
          className="absolute bottom-24 right-0 w-[320px] bg-white border-4 border-black shadow-[10px_10px_0px_#000000] overflow-hidden lg:w-[350px]"
        >
        {/* Header */}
        <div className="bg-black text-white p-4 flex justify-between items-center border-b-4 border-black">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-[#adff2f] animate-pulse"></div>
            <span className="font-black uppercase text-xs tracking-widest text-[#adff2f]">JESSY'S TERMINAL</span>
          </div>
          <Button 
            onClick={() => setIsOpen(false)} 
            variant="black"
            size="sm"
            className="!p-1 !border-2 !shadow-none hover:bg-white hover:text-black"
          >
            <i className="ph-bold ph-x text-sm"></i>
          </Button>
        </div>
        
        {/* Content */}
        <div className="p-5 space-y-5">
          <div className="relative">
            <div className="bg-[#eeeeee] p-4 border-2 border-black font-bold text-xs leading-relaxed shadow-[4px_4px_0px_#000000] text-black">
              "Ready to skip the small talk and build something massive? Choose your weapon below."
            </div>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-[#eeeeee] border-r-2 border-b-2 border-black rotate-45"></div>
          </div>
          
          <div className="space-y-4 pt-2">
            <Button 
              href="https://wa.me/6281234567890" 
              variant="secondary"
              size="md"
              fullWidth
              className="justify-between"
            >
              <span className="flex items-center gap-2">
                <i className="ph-bold ph-whatsapp-logo text-xl"></i>
                WhatsApp
              </span>
              <i className="ph-bold ph-arrow-right"></i>
            </Button>
            
            <Button 
              href="mailto:hi.kangjessy@gmail.com" 
              variant="primary"
              size="md"
              fullWidth
              className="justify-between"
            >
              <span className="flex items-center gap-2">
                <i className="ph-bold ph-envelope text-xl"></i>
                Email Direct
              </span>
              <i className="ph-bold ph-arrow-right"></i>
            </Button>
          </div>
        </div>
        
        {/* Decorative Caution Tape */}
        <div className="h-4 bg-black w-full flex overflow-hidden">
          <div className="flex animate-caution-scroll whitespace-nowrap">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-8 h-full bg-[#ffd700] skew-x-[45deg] mr-4"></div>
            ))}
          </div>
        </div>
      </div>
      )}

      {/* Trigger Button */}
      <Button 
        id="chat-trigger"
        onClick={toggleChat}
        variant="secondary"
        size="lg"
        className="!w-16 !h-16 !p-0 !shadow-[8px_8px_0px_#000000]"
      >
        <i className="ph-bold ph-chats-teardrop text-3xl"></i>
      </Button>
    </div>
  );
};

export default FloatingChat;
