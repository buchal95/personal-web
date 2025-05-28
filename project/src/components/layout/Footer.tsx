import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-primary via-secondary to-accent py-6 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/60 text-sm">
            © 2025 Všechna práva vyhrazena
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/janbuchal.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/buchal_jan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com/in/jan-buchal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                Podmínky služby
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                Ochrana osobních údajů
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;