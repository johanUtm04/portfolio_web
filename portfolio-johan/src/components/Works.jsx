import React, { useState } from 'react';

const projects = [
  {
    title: "Gestión de Activos - PIHCSA",
    company: "PIHCSA - Sector Médico (Área de sistemas)",
    description: "Sistema desarrollado para optimizar el control, registro y auditoría de activos tecnológicos en el sector salud.",
    tech: ["PHP", "MySQL", "Laravel", "Full-Stack", "Linux"],
    link: "https://github.com/johanUtm04/Gesto-de-Activos---PIHCSA/",
    img: "/pihcsa.png",
  },
  {
    title: "VetFormat - IMPA",
    company: "IMPA (Freelance)",
    description: "Digitalización de formatos veterinarios migrando procesos de Excel a Laravel con generación de PDFs dinámicos.",
    tech: ["PHP", "MySQL", "Laravel", "Full-Stack"],
    link: "https://github.com/johanUtm04/VetFormat-IMPA",
    img: "/impa.png",
  },
  {
    title: "Infraestructura y Soporte",
    company: "Intecfrac - Soporte a Tiendas García",
    description: "Responsable de la implementación de servidores SR250, sistemas UPS y diagnóstico de redes en sitio.",
    tech: ["Servidores SR250", "Redes", "Hardware", "Soporte"],
    link: "#",
    img: "/soporte_garcia.jpeg", 
  },
  {
    title: "E-commerce 'LuisHa'",
    company: "Johan y Luis Company",
    description: "Desarrollo colaborativo Full-Stack enfocado en arquitecturas modernas y gestión de inventarios.",
    tech: ["React", "Node.js", "Infraestructura"],
    link: "https://github.com/johanUtm04/e_commerce",
    img: "/e_commerce.jpg",
  },
];

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = () => setSelectedProject(null);

  return (   
    <section id="works" className="py-20 px-10 bg-white border-y-3 border-black">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
        <h2 className="text-5xl font-bold bg-brand-accent text-white px-6 py-2 shadow-neo inline-block italic uppercase">
          Proyectos & Experiencia
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white border-3 border-black p-6 shadow-neo flex flex-col h-full hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all group">
            
            {/* Contenedor Imagen con el Amarillo Michoacán de fondo */}
            <div className="bg-brand-yellow border-2 border-black mb-4 aspect-video overflow-hidden">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              />
            </div>
            
            <h3 className="text-2xl font-black mb-1 leading-tight uppercase">{project.title}</h3>
            <p className="text-brand-accent font-bold text-sm mb-4 uppercase">{project.company}</p>
            <p className="text-gray-700 mb-6 flex-grow font-medium">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-black text-white text-[10px] font-black px-2 py-1 uppercase border border-brand-yellow">
                  {t}
                </span>
              ))}
            </div>

            <button 
              onClick={() => project.link === "#" ? setSelectedProject(project) : window.open(project.link, '_blank')}
              className="w-full text-center bg-brand-accent text-white font-bold py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-brand-yellow hover:text-black transition-all cursor-pointer uppercase"
            >
              {project.link === "#" ? 'Ver Detalles' : 'Ver en GitHub'}
            </button>
          </div>
        ))}
      </div>

      {/* Modal - Detalles de Experiencia Técnica */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={closeModal}>
          <div 
            className="bg-white border-4 border-black p-8 max-w-2xl w-full shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} className="absolute top-4 right-4 text-3xl font-black hover:text-brand-accent transition-colors">✕</button>
            
            <h2 className="text-4xl font-black uppercase mb-2 italic underline decoration-brand-yellow decoration-4">
              {selectedProject.title}
            </h2>
            <p className="text-brand-accent font-black mb-6 tracking-tighter uppercase">{selectedProject.company}</p>
            
            <div className="border-3 border-black p-4 bg-gray-100 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-bold text-lg leading-tight">{selectedProject.description}</p>
            </div>

            {selectedProject.company.includes("Intecfrac") && (
              <div className="mb-6 space-y-3">
                <h4 className="font-black uppercase text-md bg-black text-white px-2 inline-block">Bitácora de Actividades:</h4>
                <ul className="space-y-1 text-sm font-bold">
                  <li className="flex items-center gap-2">✓ Implementación de Servidor Lenovo SR250</li>
                  <li className="flex items-center gap-2">✓ Validación y liberación de sistemas UPS</li>
                  <li className="flex items-center gap-2">✓ Configuración de estaciones de trabajo a Dominio</li>
                  <li className="flex items-center gap-2">✓ Reparación de fallas en nodos de red (Nodo 11)</li>
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.tech.map((t, i) => (
                <span key={i} className="bg-brand-yellow text-black border-2 border-black px-3 py-1 font-black text-xs uppercase">
                  {t}
                </span>
              ))}
            </div>

            <button 
              onClick={closeModal}
              className="w-full bg-black text-white font-black py-4 hover:bg-brand-accent transition-all uppercase text-lg border-2 border-black"
            >
              Cerrar Expediente
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;