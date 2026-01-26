const About = ({ t }) => {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center justify-between py-20 px-10 gap-16 bg-white border-y-3 border-black">
      
      {/* Left side */}
      <div className="flex-1 hidden md:flex justify-center">
        <div className="border-3 border-brand-accent rounded-3xl p-4 w-full max-w-sm shadow-neo bg-brand-bg aspect-[4/5] flex items-center justify-center">
              <img 
                className="w-full h-full object-cover rounded-2xl"                
                src="/code.jpg" 
                alt="Johan Jael López Reyes" 
              />
        </div>
      </div>

      {/* Right side */}
      <div className="flex-[1.5]">
        <h2 className="text-5xl font-bold mb-6 inline-block bg-brand-accent text-white px-4 py-1 shadow-neo">
          {t.aboutTitle}
        </h2>
        
        <div className="space-y-4 text-lg font-medium leading-relaxed">
          <p>
            {t.aboutP1}
          </p>
          
          <p>
            {t.aboutP2}
          </p>

          <p>
            {t.aboutP3}
          </p>
        </div>
      </div>

    </section>
  );
};

export default About;