const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center p-6 bg-brand-bg border-b-3 border-black shadow-sm">
      <div className="font-bold text-xl leading-tight text-brand-accent hover:scale-105 transition-transform cursor-default">
        Johan Jael <br /> 
        <span className="text-black">López Reyes</span>
      </div>

      <ul className="hidden md:flex gap-8 font-bold text-lg">
        <li className="group">
          <a href="#" className="group-hover:text-brand-accent transition-colors">Home</a>
          <div className="h-1 bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </li>
        <li className="group">
          <a href="#about" className="group-hover:text-brand-accent transition-colors">About</a>
          <div className="h-1 bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </li>
        <li className="group">
          <a href="#works" className="group-hover:text-brand-accent transition-colors">Works</a>
          <div className="h-1 bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </li>
        <li>
          <a 
            href="#contact" 
            className="bg-brand-accent text-white px-4 py-2 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="md:hidden bg-brand-accent text-white p-2 border-2 border-black font-bold">
        MENU
      </div>
    </nav>
  );
};

export default Navbar;