import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navigationItems = [
    { id: 'about', label: 'O mně' },
    { id: 'testimonials', label: 'Reference' },
    { id: 'contact', label: 'Kontakt' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 h-[72px] flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/janbuchal_logo.png" 
            alt="Jan Buchal Logo" 
            className="h-10 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-primary hover:text-secondary' 
                  : 'text-white hover:text-accent'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden p-2 -mr-2 transition-colors ${
            isScrolled ? 'text-primary' : 'text-white'
          }`}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[72px] bg-white/90 backdrop-blur-md shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-primary hover:text-secondary transition-colors py-4 text-left text-lg font-medium border-b border-gray-100 last:border-none"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;