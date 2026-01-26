import { useState } from 'react';

//Array projects
const projects = [
  {
    title: "Gestión de Activos - PIHCSA",
    company: "PIHCSA - Sector Médico",
    description: "Sistema para el control y auditoría de activos tecnológicos.",
    tech: ["PHP", "MySQL", "Laravel", "Linux"],
    link: "https://github.com/johanUtm04/Gesto-de-Activos---PIHCSA",
    img: "/pihcsa.jpeg",
    details: [
      "Arquitectura MVC con Laravel para escalabilidad.",
      "Módulo de auditoría para registro de movimientos de Activos de la empresa.",
      "Interfaz optimizada para personal de sistemas/administrativo.",
      "Despliegue en servidor local bajo entorno Linux.",
      "Actualmente en produccion y en uso de la empresa.",
    ]
  },
  {
    title: "VetFormat - IMPA",
    company: "IMPA (Freelance)",
    description: "Digitalización de formatos veterinarios municipales.",
    tech: ["PHP", "MySQL", "Laravel", "PDF Engine"],
    link: "https://github.com/johanUtm04/VetFormat-IMPA",
    img: "/impa.jpeg",
    details: [
      "Migración de procesos basados en Excel a base de datos relacional.",
      "Generación automatizada de certificados y formatos PDF.",
      "Sistema de roles (Administrador / Veterinario).",
      "Validación de datos para evitar errores en registros animales."
    ]
  },
  {
    title: "Infraestructura y Soporte",
    company: "Intecfrac - Soporte a Tiendas García",
    description: "Implementación de servidores y diagnóstico de redes en sitio.",
    tech: ["Servidores SR250", "Redes", "Hardware", "Soporte"],
    link: "#", 
    isInfra: true, 
    img: "/soporte_garcia.jpeg",
    details: [
      "Implementación de Servidor Lenovo SR250.",
      "Validación y liberación de sistemas UPS críticos.",
      "Configuración de estaciones de trabajo a Dominio corporativo.",
      "Reparación de fallas en nodos de red (Nodo 11)."
    ]
  },
  {
    title: "E-commerce 'LuisHa'",
    company: "Johan y Luis Company",
    description: "Desarrollo Full-Stack enfocado en arquitecturas modernas. (Proyecto actualmente en proceso con Luis, la información puede variar).",
    tech: ["React", "Node.js", "Infraestructura"],
    link: "#",
    img: "/e_commerce.jpg",
    details: [
      "Integración de pasarela de pagos simulada.",
      "Manejo de estado global para carrito de compras.",
      "Diseño responsivo con enfoque Mobile-First.",
      "Colaboración técnica para optimización de tiempos de carga."
    ]
  }
];

//Functional Component
const Works = ({ t }) => { // <--- Recibimos t
  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = () => setSelectedProject(null);

  return (   
    <section id="works" className="py-20 px-10 bg-white border-y-3 border-black">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
        <h2 className="text-5xl font-bold bg-brand-accent text-white px-6 py-2 shadow-neo inline-block italic uppercase">
          {t.projectsTitle}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Usamos t.projectsData que viene del archivo de traducciones */}
        {t.projectsData.map((project, index) => (
          <div key={index} className="bg-white border-3 border-black p-6 shadow-neo flex flex-col h-full hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all group">
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
            
            <button 
              onClick={() => setSelectedProject(project)}
              className="w-full text-center bg-brand-accent text-white font-bold py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-brand-yellow hover:text-black transition-all cursor-pointer uppercase"
            >
              {t.viewDetails}
            </button>
          </div>
        ))}
      </div>
      
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={closeModal}>
          <div 
            className="bg-white border-4 border-black p-8 max-w-2xl w-full shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} className="absolute top-4 right-4 text-3xl font-black hover:text-brand-accent transition-colors cursor-pointer">✕</button>
            
            <h2 className="text-4xl font-black uppercase mb-2 italic underline decoration-brand-yellow decoration-4">
              {selectedProject.title}
            </h2>
            <p className="text-brand-accent font-black mb-6 tracking-tighter uppercase">{selectedProject.company}</p>
            
            <div className="border-3 border-black p-4 bg-gray-100 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-bold text-lg leading-tight">{selectedProject.description}</p>
            </div>

            {selectedProject.details && (
              <div className="mb-6 space-y-3">
                <h4 className="font-black uppercase text-md bg-black text-white px-2 inline-block italic">
                  {t.navHome === "Inicio" ? "Bitácora de Ingeniería:" : "Engineering Log:"}
                </h4>
                <ul className="space-y-1 text-sm font-bold">
                  {selectedProject.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-brand-yellow">✓</span> {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* ... El resto de tus botones usando t.closeProject y t.githubBtn */}
            <div className="flex flex-col sm:flex-row gap-4">
               <button 
                onClick={closeModal}
                className="w-full bg-black text-white font-black py-4 hover:bg-brand-accent transition-all uppercase text-lg border-2 border-black cursor-pointer"
              >
                {t.closeProject}
              </button>
              <button 
                onClick={() => window.open(selectedProject.link, '_blank')}
                className="w-full bg-brand-accent text-white font-black py-4 hover:bg-brand-yellow hover:text-black transition-all uppercase text-lg border-2 border-black cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                {selectedProject.isInfra ? (t.navHome === "Inicio" ? 'Hoja de Trabajo' : 'Work Log') : 'Github'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default Works;