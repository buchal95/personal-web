import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    window.open('https://calendly.com/janbuchal', '_blank');
  };

  return (
    <section 
      className="relative min-h-screen flex items-center pt-[72px]"
      style={{
        backgroundImage: "url('/hero-image.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-secondary/50 to-accent/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
      
      <div className="container mx-auto z-10 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-float drop-shadow-lg">
            Data-driven růst vašeho byznysu
          </h1>
          <div className="inline-block bg-gradient-to-r from-secondary to-accent p-[2px] rounded-2xl mb-10">
            <h2 className="text-lg sm:text-xl md:text-2xl text-white bg-primary/80 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-2xl">
              Maximalizuji zisk a otevírám nové příležitosti pro růst.
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-16">
            <button
              onClick={scrollToContact}
              className="button-primary"
            >
              Domluvme si 15minutový hovor
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <button
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          aria-label="Scroll down"
          className="text-white glass-card p-2 rounded-full animate-float"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;