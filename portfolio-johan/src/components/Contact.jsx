import React from 'react';

const Contact = () => {
  // Función para manejar el contacto sin mostrar el mail en el HTML plano
const handleEmailClick = () => {
  const email = "johanlopezrey1@gmail.com";
  const subject = "Contacto desde Portafolio Web";
  const body = "Hola Johan, vi tu portafolio y me gustaría platicar contigo sobre...";
  
  // URL para abrir Gmail directamente en modo redactar
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  // Abrir en una pestaña nueva
  window.open(gmailUrl, '_blank');
};

  return (
    <section id="contact" className="py-20 px-10 bg-white border-t-3 border-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-10 inline-block bg-brand-accent text-white px-8 py-2 shadow-neo">
          Contacto
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="text-left space-y-6">
            <h3 className="text-3xl font-bold italic">¿Tienes un proyecto en mente?</h3>
            <p className="text-lg font-medium">
              Estoy listo para aplicar mis conocimientos como <span className="text-brand-accent font-bold">Ingeniero en Software</span> en retos que requieran escalabilidad y soluciones multiplataforma.
            </p>
            
            <div className="space-y-4 font-bold">
              {/* Botón de correo que protege tu privacidad */}
              <button 
                onClick={handleEmailClick}
                className="flex items-center gap-3 group hover:text-brand-accent transition-colors"
              >
                <span className="bg-brand-accent text-white p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
                  📧
                </span>
                <span>Enviar correo electrónico</span>
              </button>

              <p className="flex items-center gap-3">
                <span className="bg-brand-accent text-white p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  📍
                </span>
                Morelia, Michoacán
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <a 
              href="/Ing.JohanLopezReyes.pdf" 
              download
              className="bg-white border-3 border-black text-black text-xl font-bold py-4 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              📥 Descargar CV (PDF)
            </a>
            
            <a 
              href="https://github.com/johanutm04" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white text-xl font-bold py-4 shadow-[4px_4px_0px_0px_#7a1b43] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              🚀 Ver GitHub
            </a>
          </div>
        </div>

        {/* Footer simple */}
        <footer className="mt-20 pt-10 border-t-2 border-dashed border-gray-300">
          <p className="font-bold opacity-60 italic">
            © 2026 - Diseñado y Programado por Johan Jael López Reyes
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;