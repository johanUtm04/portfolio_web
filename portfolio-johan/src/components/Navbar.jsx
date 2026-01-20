const Navbar = () => {
  return (
    // 1. Cambiamos bg-brand-bg por bg-brand-accent
    <nav className="sticky top-0 z-50 flex justify-between items-center p-4 bg-brand-accent border-b-3 border-black shadow-sm">
      
      {/* 2. Cambiamos el color del nombre a blanco para que resalte sobre el guinda */}
      <div className="font-bold text-xl leading-tight text-white hover:scale-105 transition-transform cursor-default">
        Johan Jael <br /> 
        <span className="text-black">López Reyes</span>
      </div>

      <ul className="hidden md:flex gap-8 font-bold text-lg items-center">
        {/* 3. Cambiamos los hover de los enlaces a blanco o negro */}
        <li className="group">
          <a href="#home" className="text-white group-hover:text-black transition-colors">Inicio</a>
          <div className="h-1 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </li>
        <li className="group">
          <a href="#about" className="text-white group-hover:text-black transition-colors">Acerca de Mi</a>
          <div className="h-1 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </li>

        <li className="group">
          <a href="#stack" className="text-white group-hover:text-black transition-colors">Stack Tecnologico</a>
          <div className="h-1 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </li>

        <li className="group">
          <a href="#works" className="text-white group-hover:text-black transition-colors">Proyectos</a>
          <div className="h-1 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </li>
        
        {/* 4. El botón de contacto ahora resalta mejor en blanco/negro */}
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