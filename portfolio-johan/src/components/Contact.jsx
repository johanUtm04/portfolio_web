import React from 'react';

const Contact = ({ t }) => {
  const handleEmailClick = () => {
    const email = "johanlopezrey1@gmail.com";
    // Usamos lógica simple para el asunto según el idioma
    const subject = t.navHome === "Inicio" 
      ? "Contacto desde Portafolio Web" 
      : "Contact from Web Portfolio";
    const body = t.navHome === "Inicio"
      ? "Hola Johan, vi tu portafolio y me gustaría platicar contigo sobre..."
      : "Hi Johan, I saw your portfolio and would like to talk to you about...";
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-10 bg-white border-t-3 border-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-10 inline-block bg-brand-accent text-white px-8 py-2 shadow-neo">
          {t.contactTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="text-left space-y-6">
            <h3 className="text-3xl font-bold italic">{t.contactSubtitle}</h3>
            <p className="text-lg font-medium">
              {t.contactText}
            </p>
            
            <div className="space-y-4 font-bold">
              <button 
                onClick={handleEmailClick}
                className="flex flex-col items-start group transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="bg-brand-accent text-white p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
                    📧
                  </span>
                  <span className="text-xl font-bold group-hover:text-brand-accent">
                    {t.contactEmail}
                  </span>
                </div>
                <span className="text-xs opacity-50 ml-12 font-medium">
                  ({t.navHome === "Inicio" ? "Se abrirá en una pestaña nueva" : "Will open in a new tab"})
                </span>
              </button>

              <p className="flex items-center gap-3">
                <span className="bg-brand-accent text-white p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  📍
                </span>
                {t.contactLocation}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <a 
              href="/Ing.JohanLopezReyes.pdf" 
              download
              className="bg-white border-3 border-black text-black text-xl font-bold py-4 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-center"
            >
              {t.downloadCV}
            </a>
            
            <a 
              href="https://github.com/johanutm04" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white text-xl font-bold py-4 shadow-[4px_4px_0px_0px_#7a1b43] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-center"
            >
              {t.githubBtn}
            </a>
          </div>
        </div>

        <footer className="mt-20 pt-10 border-t-2 border-dashed border-gray-300">
          <p className="font-bold opacity-60 italic">
            {t.footer}
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;