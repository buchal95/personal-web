import React from 'react';
import { TrendingUp, BarChart3, Target } from 'lucide-react';

const Principles: React.FC = () => {
  return (
    <section className="py-16 bg-[#F5F7FA]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg">
            <p className="text-lg text-[#2D3436] leading-relaxed mb-8">
              Reklama pro mě není o tom, kolik utratíme, ale o tom, jaký skutečný přínos přinese. Měřím inkrementální zisk, optimalizuji rozpočet tam, kde to nejvíce podporuje růst, a škáluji jen kampaně, které přinášejí ověřitelné výsledky.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-3 transform transition-transform group-hover:scale-110">
                  <TrendingUp size={28} className="text-secondary" />
                </div>
                <h4 className="text-xl font-semibold text-[#2C3E50] mb-2">Inkrementální přístup</h4>
                <p className="text-[#2D3436]">Přidaná hodnota každé investované koruny</p>
              </div>
              
              <div className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-3 transform transition-transform group-hover:scale-110">
                  <Target size={28} className="text-secondary" />
                </div>
                <h4 className="text-xl font-semibold text-[#2C3E50] mb-2">Strategická integrace</h4>
                <p className="text-[#2D3436]">Placené i organické kanály v jedné strategii</p>
              </div>
              
              <div className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-3 transform transition-transform group-hover:scale-110">
                  <BarChart3 size={28} className="text-secondary" />
                </div>
                <h4 className="text-xl font-semibold text-[#2C3E50] mb-2">Kontinuální optimalizace</h4>
                <p className="text-[#2D3436]">Testy, analýzy a úpravy v reálném čase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;