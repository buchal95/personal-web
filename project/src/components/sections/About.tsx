import React from 'react';
import { TrendingUp, BarChart3, Target, Brain } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-10 text-center">
            O mně
          </h2>
          
          <div className="flex flex-col md:flex-row-reverse items-start gap-10">
            <div className="w-full md:w-1/3">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-2xl transform rotate-6 group-hover:rotate-3 transition-transform duration-300"></div>
                <img
                  src="profile.jpg"
                  alt="Jan Buchal"
                  className="relative rounded-2xl shadow-xl w-full object-cover transform transition-all duration-300 group-hover:translate-y-[-5px] group-hover:shadow-2xl"
                />
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <p className="text-lg text-[#2D3436] leading-relaxed mb-8">
                Jsem Jan Buchal – performance marketingový stratég specializující se na Meta Ads. Díky více než 5 letům praxe spojuji datový přístup s byznysovým myšlením, abych e-shopům, zakladatelům a podnikatelům pomáhal definovat reálné cíle a dosahovat měřitelné návratnosti investic.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-secondary/5 to-accent/5 p-5 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#2C3E50]">Meta Ads</h3>
                  </div>
                  <p className="text-[#2D3436]">
                    Tvorba a optimalizace kampaní maximalizujících návratnost investic
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-secondary/5 to-accent/5 p-5 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#2C3E50]">Analytika & měření</h3>
                  </div>
                  <p className="text-[#2D3436]">
                    Detailní rozbor dat a identifikace růstových příležitostí
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-secondary/5 to-accent/5 p-5 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#2C3E50]">Růstová strategie</h3>
                  </div>
                  <p className="text-[#2D3436]">
                    Plánování a škálování kampaní v rámci dlouhodobého byznysového růstu
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-secondary/5 to-accent/5 p-5 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Brain className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#2C3E50]">Byznysové myšlení</h3>
                  </div>
                  <p className="text-[#2D3436]">
                    Propojení marketingových aktivit s obchodními cíli a KPIs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;