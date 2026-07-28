import { useState } from 'react';

const projects = [
  {
  title: "Incident Response - WhatsApp Business Ban",
  company: "Caso Interno / Marketing Ops",
  description: "Diagnóstico y contención de un incidente de seguridad/compliance que resultó en el baneo permanente de un canal comercial crítico.",
  tech: ["Incident Response", "Root Cause Analysis", "Documentación Técnica", "Mitigación de Riesgo"],
  link: "https://github.com/tu-usuario/tu-repo/blob/main/INC-2026-0727-whatsapp-business-ban.md",
  img: "/cybersecurity_incidents/whatsApp_incident/incident_whatsapp_1part.jpeg",
  images: [
    "/cybersecurity_incidents/whatsApp_incident/incident_whatsapp_2part.jpeg",
    "/cybersecurity_incidents/whatsApp_incident/incident_whatsapp_3part.jpeg",
    "/cybersecurity_incidents/whatsApp_incident/incident_whatsapp_4part.jpeg",
  ],
  details: [
    "Análisis de causa raíz: envío masivo no segmentado detonó el umbral anti-spam de Meta.",
    "Contención inmediata: hardening de privacidad y aislamiento de sesiones multi-dispositivo durante la restricción.",
    "Triage post-desbloqueo: atención manual priorizada para evitar más reportes de usuarios.",
    "Reporte de incidente formal (Markdown) con hallazgos, impacto y plan de acción.",
    "Recomendación estratégica: migración a WhatsApp Business API para eliminar el riesgo a futuro."
  ]
},
{
  title: "Hardening & Reingeniería - Corporación Azul",
  company: "Corporación Azul (Materiales de Construcción)",
  description: "Reconstrucción y blindaje de infraestructura web tras brecha de seguridad.",
  tech: ["WordPress", "PHP", "Hardening", "SEO Técnico", "Leaflet.js"],
  link: "#",
  img: "/corp_azul.png",
  images: ["/corp_azul.png", "/azul_lighthouse.png", "map.png"], 
  details: [
    "Recuperación forense de activos digitales y eliminación de inyecciones de malware.",
    "Hardening de servidor (.htaccess) y core (functions.php) para mitigación de ataques XSS y Clickjacking.",
    "Desarrollo de motor de geolocalización 'Privacy-by-Design' con Leaflet.js para búsqueda de sucursales.",
    "Optimización de Core Web Vitals alcanzando un Performance de 90+ en auditorías de Lighthouse.",
    "Implementación de arquitectura de información semántica para SEO y accesibilidad (A11y)."
  ]
},
  {
    title: "Gestión de Activos - PIHCSA",
    company: "PIHCSA - Sector Médico",
    description: "Sistema para el control y auditoría de activos tecnológicos.",
    tech: ["PHP", "MySQL", "Laravel", "Linux"],
    link: "https://github.com/johanUtm04/gestion_activos_pihcsa",
    notion: "https://www.notion.so/Documentacion-Tecnica-2c9bfd20d338806bac33ee7dbc6ab714?source=copy_link", 
    img: "/pihcsa.jpeg",
    images: ["/pihcsa1.webp", "/pihcsa2.webp", "/pihcsa3.webp", "/pihcsa4.webp"], 
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
    img: "/infrestructura.jpeg",
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
    description: "Desarrollo Full-Stack enfocado en arquitecturas modernas.",
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

const ProjectCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="border-4 border-black mb-6 bg-black relative group shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden w-full">
      <div className="relative aspect-video flex items-center justify-center bg-gray-900">
        <img 
          src={images[current]} 
          alt={`Slide ${current}`} 
          className="w-full h-full object-contain md:object-cover" 
        />
      </div>
      
      {images.length > 1 && (
        <>
          <button 
            onClick={prev} 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border-2 border-black w-10 h-10 flex items-center justify-center font-black hover:bg-brand-yellow transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            ←
          </button>
          <button 
            onClick={next} 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border-2 border-black w-10 h-10 flex items-center justify-center font-black hover:bg-brand-yellow transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            →
          </button>
          <div className="absolute bottom-4 right-4 bg-white border-2 border-black px-3 py-1 font-black text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {current + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
};

const Works = ({ t }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = () => setSelectedProject(null);

  return (   
    <section id="works" className="py-20 px-6 md:px-10 bg-white border-y-3 border-black">
      <div className="mb-12">
        <h2 className="text-5xl font-bold bg-brand-accent text-white px-6 py-2 shadow-neo inline-block italic uppercase">
          {t.projectsTitle}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.projectsData.map((project, index) => {
          const originalData = projects.find(p => p.title === project.title);
          
          return (
            <div key={index} className="bg-white border-3 border-black p-6 shadow-neo flex flex-col h-full hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all group">
              <div className="bg-brand-yellow border-2 border-black mb-4 aspect-video overflow-hidden">
                <img 
                  src={originalData?.img || project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              
              <h3 className="text-2xl font-black mb-1 leading-tight uppercase">{project.title}</h3>
              <p className="text-brand-accent font-bold text-sm mb-4 uppercase">{project.company}</p>
              <p className="text-gray-700 mb-6 flex-grow font-medium">{project.description}</p>
              
              <button 
                onClick={() => setSelectedProject({ ...project, ...originalData })}
                className="w-full text-center bg-brand-accent text-white font-bold py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-brand-yellow hover:text-black transition-all cursor-pointer uppercase"
              >
                {t.viewDetails}
              </button>
            </div>
          );
        })}
      </div>
      
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={closeModal}>
          <div 
            className="bg-white border-4 border-black p-6 md:p-8 max-w-7xl w-full shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-y-auto max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} className="absolute top-4 right-4 text-3xl font-black hover:text-brand-accent transition-colors cursor-pointer z-10 bg-white border-2 border-black w-10 h-10 flex items-center justify-center">✕</button>
            
            <div className="mb-6">
              <h2 className="text-3xl md:text-5xl font-black uppercase mb-1 italic leading-none">
                {selectedProject.title}
              </h2>
              <p className="text-brand-accent font-black tracking-tighter uppercase border-b-4 border-brand-yellow inline-block">
                {selectedProject.company}
              </p>
            </div>

            {/* CARRUSEL PRIORITARIO */}
            <ProjectCarousel images={selectedProject.images || [selectedProject.img]} />

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="border-3 border-black p-4 bg-gray-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <p className="font-bold text-lg leading-tight">{selectedProject.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech?.map((skill, i) => (
                    <span key={i} className="bg-black text-white text-xs font-black px-2 py-1 uppercase italic">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-black uppercase text-md bg-black text-white px-2 inline-block italic">
                  {t.navHome === "Inicio" ? "Bitácora de Ingeniería:" : "Engineering Log:"}
                </h4>
                <ul className="space-y-2 text-sm font-bold italic">
                  {selectedProject.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 leading-tight">
                      <span className="text-brand-accent text-lg">›</span> {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
                onClick={() => {
                  const urlToOpen = selectedProject.isInfra ? selectedProject.img : selectedProject.link;
                  window.open(urlToOpen, '_blank');
                }}
                className="w-full bg-white text-black font-black py-4 hover:bg-brand-yellow transition-all uppercase text-lg border-2 border-black cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                {selectedProject.isInfra 
                  ? (t.navHome === "Inicio" ? 'Ver Evidencia' : 'View Evidence') 
                  : 'Github Repo'}
              </button>

              {selectedProject.notion && (
                <button 
                  onClick={() => window.open(selectedProject.notion, '_blank')}
                  className="w-full bg-brand-accent text-white font-black py-4 hover:bg-brand-yellow hover:text-black transition-all uppercase text-lg border-2 border-black cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                  {t.navHome === "Inicio" ? 'Documentación' : 'Notion Docs'}
                </button>
              )}
              
              <button 
                onClick={closeModal}
                className="sm:col-span-2 w-full bg-black text-white font-black py-3 hover:bg-gray-800 transition-all uppercase text-sm border-2 border-black cursor-pointer"
              >
                {t.closeProject}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;