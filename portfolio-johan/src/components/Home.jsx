const Home = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-between py-20 px-10 gap-10">
      
      <div className="flex-1">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          My name is 
          <span className="block bg-brand-accent text-white inline-block px-4 py-1 mt-4 shadow-neo">
            <div className="italic">
                Johan Jael Lopez Reyes
            </div>
          </span>
        </h1>
        
        <div className="mt-8">
          <span className="bg-brand-accent text-white text-2xl md:text-3xl font-bold px-6 py-2 shadow-neo">
            I'm Developer
          </span>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="border-3 border-brand-accent rounded-3xl p-6 w-full max-w-md shadow-neo bg-white aspect-square flex items-center justify-center">
          <div className="text-brand-accent w-full h-full border-3 border-dashed border-brand-accent rounded-2xl flex items-center justify-center">
             <span className="text-sm font-bold italic">Espacio para tu fotografía</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Home;