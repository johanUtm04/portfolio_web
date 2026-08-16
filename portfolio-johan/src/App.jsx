import Home from "./components/sections/Home";
import About from "./components/sections/About";
import TechStack from './components/sections/TechStack';
import Works from "./components/sections/Works";
import Contact from './components/sections/Contact';
import { useState } from 'react';
import { translations } from './translations';
import Navbar from "./components/layout/Navbar";
import SocialFloatingMenu from './components/layout/SocialFloatingMenu';

function App() {
  const [lang, setLang] = useState('es');
  const toggleLang = () => setLang(prev => prev === 'es' ? 'en' : 'es');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-brand-bg text-black">
      
      <button 
        onClick={toggleLang}
        className="fixed top-24 right-6 z-[100] bg-[#FDB813] border-2 border-black px-4 py-2 font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
      >
        {t.changeLang}
      </button>
      
      <SocialFloatingMenu t={t} />

      <Navbar t={t} lang={lang} /> 

      <main>
        <Home t={t} /> 
        <About t={t} />
        <TechStack t={t} />
        <Works t={t} />
        <Contact t={t} />
      </main>
    </div>
  );
}

export default App