const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1547996663-b85580e93299?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Watch Background" 
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/40 to-neutral-950"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
        <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in">
          Est. 2024 • Switzerland
        </p>
        <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6 leading-tight animate-slide-up">
          Time, Defined by <br/>
          <span className="italic text-gold-light">Power.</span>
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light tracking-wide animate-slide-up delay-100">
          Luxury watches crafted for those who lead with confidence. Experience the perfect blend of modern engineering and timeless elegance.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 animate-slide-up delay-200">
          <button 
            onClick={() => scrollToSection('collection')}
            className="bg-primary text-primary-foreground px-8 py-4 uppercase tracking-widest text-sm hover:bg-gold-dark transition-all duration-300 shadow-gold"
          >
            Shop Collection
          </button>
          <button 
            onClick={() => scrollToSection('story')}
            className="border border-foreground/30 text-foreground px-8 py-4 uppercase tracking-widest text-sm hover:bg-foreground hover:text-background transition-all duration-300 backdrop-blur-sm"
          >
            Discover Legacy
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
