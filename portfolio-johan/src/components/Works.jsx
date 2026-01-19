const projects = [
  {
    title: "Gestión de Activos - PIHCSA",
    company: "PIHCSA (Sector Médico)",
    description: "Diseño y puesta en producción de un sistema para control de activos TI. Reparación de código PHP Legacy y optimización de MySQL[cite: 19, 21, 22].",
    tech: ["PHP", "MySQL", "Backend"],
    link: "#" 
  },
  {
    title: "VetFormat - IMPA",
    company: "IMPA (Freelance)",
    description: "Digitalización de formatos veterinarios migrando procesos de Excel a Laravel. Generación de PDFs dinámicos y control de roles[cite: 25, 27, 28].",
    tech: ["Laravel", "PHP", "Full-Stack"],
    link: "#" 
  },
  {
    title: "Infraestructura CCP",
    company: "Cuidado con el Perro",
    description: "Intervención técnica nocturna y soporte en infraestructura de red y sistemas[cite: 31, 32].",
    tech: ["Infraestructura", "Soporte"],
    link: "#"
  }
];

const Works = () => {
  return (
    <section className="py-20 px-10 bg-brand-bg">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
        <h2 className="text-5xl font-bold bg-brand-accent text-white px-6 py-2 shadow-neo inline-block">
          My Works
        </h2>
        <p className="max-w-md text-lg font-medium">
          He trabajado en proyectos que van desde el sector médico hasta el retail, 
          enfocándome siempre en la escalabilidad y la resolución de problemas técnicos[cite: 5, 13, 21].
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white border-3 border-black p-6 shadow-neo flex flex-col h-full">
            <div className="mb-4 h-40 bg-brand-bg border-2 border-black border-dashed flex items-center justify-center">
              <span className="text-brand-accent font-bold italic text-sm">Preview Proyecto</span>
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