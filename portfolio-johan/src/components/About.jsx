const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 px-10 gap-16 bg-white border-y-3 border-black">
      
      {/* Left side */}
      <div className="flex-1 hidden md:flex justify-center">
        <div className="border-3 border-brand-accent rounded-3xl p-4 w-full max-w-sm shadow-neo bg-brand-bg aspect-[4/5] flex items-center justify-center">
          <div className="text-brand-accent w-full h-full border-2 border-dashed border-brand-accent rounded-2xl flex items-center justify-center p-6 text-center">
             <span className="font-bold italic">"Enfocado en resolver problemas técnicos complejos"</span>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-[1.5]">
        <h2 className="text-5xl font-bold mb-6 inline-block bg-brand-accent text-white px-4 py-1 shadow-neo">
          Hola!!
        </h2>
        
        <div className="space-y-4 text-lg font-medium leading-relaxed">
          <p>
            Soy <span className="text-brand-accent font-bold">Johan Jael López Reyes</span>, 
            Ingeniero en Desarrollo de Software Multiplataforma con experiencia práctica en el ciclo completo de desarrollo (Full-Stack).
          </p>
          
          <p>
            Me especializo en desarrollar soluciones escalables utilizando <span className="font-bold">JavaScript, Python y PHP</span>,
            o frameworks como <span className="font-bold">Laravel, Django o React</span>,
            Mi enfoque principal es optimizar procesos de negocio mediante software moderno, como lo hice al digitalizar la gestión de formatos veterinarios para <span className="text-brand-accent font-bold">IMPA</span>.
          </p>

          <p>
            Tengo experiencia reparando errores críticos en sistemas legacy y optimizando bases de datos <span className="font-bold">MySQL</span> en entornos del sector médico. 
            Mi meta es siempre aportar valor técnico y eficiencia a cada proyecto en el que colaboro.
          </p>
        </div>
      </div>

    </section>
  );
};

export default About;