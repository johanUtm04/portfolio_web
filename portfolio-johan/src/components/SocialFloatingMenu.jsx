import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 

export default function SocialFloatingMenu({ t }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3 font-bold">
      
      <div 
        className={`flex flex-col gap-2 transition-all duration-300 transform ${
          isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        <a 
          href="https://linkedin.com/in/johan-jael-lopez-reyes-developerbackend/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-[#800020] border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
        >
          <FaLinkedin size={20} className="text-black" />
          <span>LinkedIn</span>
        </a>

        <a 
          href="https://github.com/johanUtm04" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-[#800020] border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
        >
          <FaGithub size={20} className="text-black" />
          <span>GitHub</span>
        </a>
      </div>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#a11a3b] text-white border-2 border-black flex items-center justify-center transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none hover:bg-[#800020] rounded-full overflow-hidden"
        style={{ clipPath: 'polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)' }} 
        aria-label="Social Menu"
      >
        <span className={`text-xl font-black transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          M
        </span>
      </button>

    </div>
  );
}