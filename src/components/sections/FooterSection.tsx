
import React from 'react';
import { Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-kastanos-brown text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">KASTANOS</h2>
            <p className="text-kastanos-beige/80">COFFEE & COMMUNITY</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com/kastanoscafe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://facebook.com/kastanoscafe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://twitter.com/kastanoscafe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10 text-sm text-white/70">
          <p>© {new Date().getFullYear()} Kastanos Coffee & Community. All rights reserved.</p>
          <div className="mt-2 md:mt-0 flex items-center gap-4">
            <p>Built by Faisal Adams</p>
            <button 
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
