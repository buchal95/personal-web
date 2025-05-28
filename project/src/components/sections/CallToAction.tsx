import React from 'react';

const CallToAction: React.FC = () => {
  const openCalendly = () => {
    window.open('https://calendly.com/janbuchal', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Zaujalo vás to?
          </h2>
          <p className="text-lg mb-8">
            Pokud vás oslovuje můj přístup a chcete odhalit skutečný potenciál vašeho byznysu, pojďme si popovídat. 15 minut stačí k tomu, abychom probrali vaše cíle, výzvy i první kroky k růstu či zisku.
          </p>
          <button
            onClick={openCalendly}
            className="button-primary"
          >
            Rezervovat 15min hovor
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;