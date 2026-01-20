const Navbar = () => {

const createSpark = (e) => {
  const navbar = e.currentTarget;

  for (let i = 0; i < 8; i++) {
    const spark = document.createElement('div');
    
    // Clases base: posicionamiento absoluto y tamaño
    spark.className = "absolute w-1.5 h-1.5 pointer-events-none z-50";
    
    // Aplicamos el amarillo del logo directamente
    spark.style.backgroundColor = "#FDB813";    
    // Sombra para que parezca que brilla (estilo neo-brutalista)
    spark.style.border = "1px solid black";

    const rect = navbar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    
    const destinationX = (Math.random() - 0.5) * 150;
    const destinationY = (Math.random() - 0.5) * 150;

    navbar.appendChild(spark);

    const animation = spark.animate([
      { transform: 'translate(0, 0) scale(1)', opacity: 1 },
      { transform: `translate(${destinationX}px, ${destinationY}px) scale(0)`, opacity: 0 }
    ], {
      duration: 500,
      easing: 'ease-out',
    });

    animation.onfinish = () => spark.remove();
  }
};

  return (
    // 1. Cambiamos bg-brand-bg por bg-brand-accent
    <nav className="sticky top-0 z-50 flex justify-between items-center p-4 bg-brand-accent border-b-3 border-black shadow-sm">
      
      {/* 2. Cambiamos el color del nombre a blanco para que resalte sobre el guinda */}
      <div className="font-bold text-xl leading-tight text-white transition-transform cursor-default">
        Johan Jael <br /> 
        <span className="text-black">López Reyes</span>
      </div>

      <ul className="hidden md:flex gap-8 font-bold text-lg items-center">
        {/* 3. Cambiamos los hover de los enlaces a blanco o negro */}
        <li className="group relative">
          <a href="#home" className="text-white group-hover:text-brand-yellow transition-colors" onClick={createSpark}>Inicio</a>
          <div className="h-1 bg-brand-yellow scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </li>
        <li className="group relative">
          <a href="#about" className="text-white group-hover:text-brand-yellow transition-colors"onClick={createSpark}>Acerca de Mi</a>
          <div className="h-1 bg-brand-yellow scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </li>

        <li className="group relative">
          <a href="#stack" className="text-white group-hover:text-brand-yellow transition-colors"onClick={createSpark}>Stack Tecnologico</a>
          <div className="h-1 bg-brand-yellow scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </li>

        <li className="group relative">
          <a href="#works" className="text-white group-hover:text-brand-yellow transition-colors"onClick={createSpark}>Proyectos</a>
          <div className="h-1 bg-brand-yellow scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </li>
        
        <li>
          <a 
            href="#contact" 
            className="bg-white text-black px-4 py-2 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all inline-block"
          >
            Contacto
          </a>
        </li>
      </ul>

      {/* 5. Ajuste para móvil */}
      <div className="md:hidden bg-white text-black p-2 border-2 border-black font-bold">
        MENU
      </div>
    </nav>
  );
};

export default Navbar;