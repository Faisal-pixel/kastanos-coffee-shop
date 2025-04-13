
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Location', href: '#location' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-serif font-bold text-kastanos-brown">KASTANOS</span>
          <span className="text-xs md:text-sm text-kastanos-green font-light">COFFEE & COMMUNITY</span>
        </a>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-kastanos-brown hover:text-kastanos-bronze transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#order" 
            className="btn-primary"
          >
            Order Now
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-kastanos-brown focus:outline-none"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-4">
          <nav className="flex flex-col space-y-4">
            {menuLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={toggleMenu}
                className="text-kastanos-brown hover:text-kastanos-bronze transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#order" 
              onClick={toggleMenu}
              className="btn-primary text-center"
            >
              Order Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
