const TechStack = () => {
  const stack = [
    { category: "Languages", tools: ["JavaScript", "Python", "PHP", "SQL"] },
    { category: "Frameworks/Libs", tools: ["React", "Laravel", "Tailwind CSS", "Vite"] },
    { category: "Tools & Skills", tools: ["Git", "MySQL", "PostgreSQL", "Infrastructure"] }
  ];

  return (
        <section id="stack" className="py-20 px-10 bg-brand-bg">        
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
        <h2 className="text-5xl font-bold bg-brand-accent text-white px-6 py-2 shadow-neo inline-block">
        Tech Stack
        </h2>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stack.map((item, index) => (
          <div key={index} className="border-3 border-black p-6 shadow-neo bg-brand-bg">
            <h3 className="text-xl font-bold mb-4 text-brand-accent underline decoration-2">
              {item.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {item.tools.map((tool, i) => (
                <span 
                  key={i} 
                  className="bg-white border-2 border-black px-3 py-1 font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  {tool}
                </span>
              ))}
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;