const TechStack = ({ t }) => {
  // Metemos el array aquí para que se actualice al cambiar de idioma
  const stack = [
    { 
      category: t.catLanguages, 
      tools: [
        {name:"JavaScript", icon:"/icons/js.png"},
        {name:"Python", icon:"/icons/python.png"},
        {name:"PHP", icon:"/icons/php.png"},
        {name:"SQL", icon:"/icons/SQL.png"},
      ]
    },
    { 
      category: t.catFrameworks, 
      tools: [
        {name: "React", icon:"/icons/react.png"},
        {name:"Laravel", icon:"/icons/laravel.png"},
        {name:"Tailwind CSS", icon: "/icons/tailwind.png"},
        {name:"Bootstrap", icon: "/icons/bootstrap.png"},
        {name:"Django", icon: "/icons/django.png"},
        {name:"Vite", icon: "/icons/vite.png"},
      ] 
    },
    { 
      category: t.catTools,
      tools: [
        {name: "Git", icon:"/icons/git.png"},
        {name: "Mysql", icon:"/icons/mysql.png"},
        {name: "Github", icon:"/icons/github.png"},
      ] 
    }
  ];

  return (
    <section id="stack" className="py-20 px-10 bg-brand-bg">        
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
        <h2 className="text-5xl font-bold bg-brand-accent text-white px-6 py-2 shadow-neo inline-block">
          {t.stackTitle}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stack.map((item, index) => (
          <div key={index} className="border-3 border-black p-6 shadow-neo bg-brand-bg">
            <h3 className="text-xl font-bold mb-4 text-brand-accent underline decoration-2">
              {item.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {item.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-2 bg-white border-2 border-black px-3 py-2 font-bold text-sm shadow-neo hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default"
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-5 h-5 object-contain"
                  />
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;