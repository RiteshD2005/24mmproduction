import React, { useState, useEffect } from 'react';
import { Menu, X, Camera } from 'lucide-react';
import { Link } from '../ui/Link';

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarClasses = `fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
    scrolled || !transparent
      ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3'
      : 'bg-transparent py-5'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-white flex items-center gap-2 font-bold text-xl">
            <Camera className="h-6 w-6 text-blue-500" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              24MM
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-white hover:text-blue-400 transition-colors">About</Link>
          <Link href="#services" className="text-white hover:text-blue-400 transition-colors">Services</Link>
          <Link href="#portfolio" className="text-white hover:text-blue-400 transition-colors">Portfolio</Link>
          <Link href="#pricing" className="text-white hover:text-blue-400 transition-colors">Pricing</Link>
          <Link href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</Link>
          <Link 
            href="#contact" 
            className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="container mx-auto px-4 py-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="text-white flex items-center gap-2 font-bold text-xl">
              <Camera className="h-6 w-6 text-blue-500" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                24MM
              </span>
            </Link>
            <button 
              onClick={toggleMenu}
              className="text-white p-2 focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="flex flex-col space-y-6 text-center mt-8">
            <Link href="#about" className="text-2xl text-white hover:text-blue-400 transition-colors" onClick={toggleMenu}>About</Link>
            <Link href="#services" className="text-2xl text-white hover:text-blue-400 transition-colors" onClick={toggleMenu}>Services</Link>
            <Link href="#portfolio" className="text-2xl text-white hover:text-blue-400 transition-colors" onClick={toggleMenu}>Portfolio</Link>
            <Link href="#pricing" className="text-2xl text-white hover:text-blue-400 transition-colors" onClick={toggleMenu}>Pricing</Link>
            <Link href="#contact" className="text-2xl text-white hover:text-blue-400 transition-colors" onClick={toggleMenu}>Contact</Link>
          </div>

          <div className="mt-auto">
            <Link 
              href="#contact" 
              className="block w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center text-lg"
              onClick={toggleMenu}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;