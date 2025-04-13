
import React from 'react';
import RevealOnScroll from '../RevealOnScroll';
import { Scan, Coffee, Menu as MenuIcon } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center overflow-hidden pt-20"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1517231925375-bf2cb42917a5?q=80&w=1974&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <RevealOnScroll>
          <div className="max-w-xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Coffee. <br className="md:hidden" />
              Commute. <br className="md:hidden" />
              Connect.
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-kastanos-beige">
              Order your brew in seconds. Just scan, select, and sip.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#order" className="btn-primary flex items-center justify-center gap-2">
                <Scan size={18} />
                <span>Scan to Order</span>
              </a>
              <a href="#menu" className="btn-secondary flex items-center justify-center gap-2">
                <MenuIcon size={18} />
                <span>See Our Menu</span>
              </a>
            </div>

            <div className="mt-12 animate-float">
              <Coffee size={30} className="text-kastanos-beige mx-auto" />
              <div className="h-6 relative">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-kastanos-beige opacity-0" 
                    style={{
                      animationName: 'steam',
                      animationDuration: '2s',
                      animationTimingFunction: 'ease-out',
                      animationIterationCount: 'infinite',
                      animationDelay: `${i * 0.6}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <div className="absolute bottom-8 left-0 w-full flex justify-center animate-pulse-soft">
        <a 
          href="#what-we-serve" 
          className="text-white flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity"
        >
          <span className="mb-2 text-sm">Scroll Down</span>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 5L12 19M12 19L19 12M12 19L5 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
