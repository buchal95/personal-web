import React from 'react';
import { Check } from 'lucide-react';
import { PACKAGES } from '../../constants';

const Pricing: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-6">
            Ceník / Balíčky
          </h2>
          <p className="text-lg text-[#2D3436]">
            Vyberte si z následujících balíčků nebo mě kontaktujte pro individuální nabídku
            přesně podle vašich potřeb.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PACKAGES.map((pkg, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 border ${
                index === 1 ? 'border-[#2980B9]' : 'border-gray-200'
              }`}
            >
              {index === 1 && (
                <div className="bg-[#2980B9] text-white py-2 text-center text-sm font-medium">
                  Nejoblíbenější
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2C3E50] mb-2">
                  {pkg.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-[#2980B9]">{pkg.price}</span>
                </div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-[#16A085] flex-shrink-0 mt-1">
                        <Check size={16} />
                      </span>
                      <span className="text-[#2D3436]">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={scrollToContact}
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    index === 1
                      ? 'bg-[#2980B9] text-white hover:bg-[#2980B9]/90'
                      : 'bg-gray-100 text-[#2C3E50] hover:bg-gray-200'
                  }`}
                >
                  Objednat
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-[#2D3436] mb-4">
            Potřebujete něco specifického? Kontaktujte mě pro individuální nabídku.
          </p>
          <button
            onClick={scrollToContact}
            className="px-6 py-3 bg-[#E67E22] text-white font-medium rounded-lg transition-transform hover:scale-105"
          >
            Nezávazná konzultace zdarma
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;