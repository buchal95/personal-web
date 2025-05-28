import React from 'react';
import { SERVICES } from '../../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-6">
            Služby
          </h2>
          <p className="text-lg text-[#2D3436]">
            Nabízím komplexní podporu v oblasti online reklamy a marketingu. 
            Vyberte si službu podle svých potřeb:
          </p>
        </div>
        
        <div className="w-full overflow-x-auto pb-4">
          <div className="min-w-[768px] lg:min-w-full">
            <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-[#2C3E50] text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Služba</th>
                  <th className="py-4 px-6 text-left">Popis</th>
                  <th className="py-4 px-6 text-left">Benefit pro klienta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {SERVICES.map((service, index) => (
                  <tr 
                    key={index}
                    className="hover:bg-[#F5F7FA] transition-colors"
                  >
                    <td className="py-4 px-6 font-medium text-[#2C3E50]">
                      {service.title}
                    </td>
                    <td className="py-4 px-6 text-[#2D3436]">
                      {service.description}
                    </td>
                    <td className="py-4 px-6 text-[#16A085]">
                      {service.benefit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <button
            onClick={() => {
              const pricingSection = document.getElementById('pricing');
              if (pricingSection) {
                pricingSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center px-6 py-3 bg-[#2980B9] text-white font-medium rounded-lg transition-transform hover:scale-105"
          >
            Zobrazit ceník
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;