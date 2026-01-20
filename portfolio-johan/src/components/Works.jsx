const projects = [
  {
    title: "Gestión de Activos - PIHCSA",
    company: "PIHCSA -Sector Médico (Area de sistemas)",
    description: "Sistema de Gestión de Activos de TI desarrollado para PIHCSA, enfocado en optimizar el control, registro, seguimiento y auditoría de activos tecnológicos dentro del sector médico.",
    tech: ["PHP", "MySQL", "Laravel", "Full-Stack", "Linux"],
    link: "https://github.com/johanUtm04/Gesto-de-Activos---PIHCSA/" 
  },
  {
    title: "VetFormat - IMPA",
    company: "IMPA (Freelance)",
    description: "Digitalización de formatos veterinarios migrando procesos de Excel a Laravel. Generación de PDFs dinámicos y control de roles[cite: 25, 27, 28].",
    tech: ["PHP", "MySQL", "Laravel", "Full-Stack"],
    link: "#" 
  },
  {
    title: "E_commerce 'LuisHa'",
    company: "Johan y Luis company",
    description: "Desarrollo colaborativo Full-Stack enfocado en arquitecturas modernas de JS y gestión de portafolios.",
    tech: ["Infraestructura", "Soporte"],
    link: "#"
  }
];

const Works = () => {
  return (  
    <section id="works" className="py-20 px-10 bg-white border-y-3 border-black">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
        <h2 className="text-5xl font-bold bg-brand-accent text-white px-6 py-2 shadow-neo inline-block">
          Proyectos
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white border-3 border-black p-6 shadow-neo flex flex-col h-full">
            <div className="mb-4 h-40 bg-brand-bg border-2 border-black border-dashed flex items-center justify-center">
              <img 
                src="/user.png" 
                alt="Johan Jael López Reyes" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
            <p className="text-brand-accent font-bold text-sm mb-4">{project.company}</p>
            <p className="text-gray-700 mb-6 flex-grow">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>

            <a 
              href={project.link} 
              className="block text-center bg-brand-accent text-white font-bold py-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
            >
              Ver en GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;