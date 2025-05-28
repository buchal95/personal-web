import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Testimonials from './components/sections/Testimonials';
import CallToAction from './components/sections/CallToAction';
import Contact from './components/sections/Contact';
import Principles from './components/sections/Principles';

function App() {
  useEffect(() => {
    document.title = 'Jan Buchal | Výkonnostní reklama na sociálních sítích';
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Testimonials />
        <Principles />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;