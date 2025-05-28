import React from 'react';
import { Database, MessageSquare, Compass, Shuffle } from 'lucide-react';

const WhyWorkWithMe: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#2C3E50] to-[#2980B9] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Proč se mnou spolupracovat
          </h2>
          <p className="text-lg text-gray-200">
            Mým cílem je doručit vám měřitelné výsledky a pomoci vám růst díky efektivnímu využití sociálních sítí.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Database size={40} />,
              title: 'Data-driven přístup',
              description: 'Rozhodnutí na základě dat, ne odhadů. Vše podloženo statistikami a měřitelnými výsledky.'
            },
            {
              icon: <MessageSquare size={40} />,
              title: 'Proaktivita',
              description: 'Navrhnu vylepšení dřív, než na ně přijdete. Pravidelné aktualizace a návrhy změn.'
            },
            {
              icon: <Compass size={40} />,
              title: 'Holistický pohled',
              description: 'Reklama, UX, e-mailing i strategie. Komplexní přístup k vašemu online businessu.'
            },
            {
              icon: <Shuffle size={40} />,
              title: 'Flexibilita',
              description: 'Efektivní vedení projektů a podpora kolegů. Práce s agenturou i jako externí konzultant.'
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transform transition-transform hover:scale-105"
            >
              <div className="flex justify-center mb-4 text-[#E67E22]">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                {item.title}
              </h3>
              <p className="text-gray-200 text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;