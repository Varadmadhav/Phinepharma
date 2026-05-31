import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/src/imports/WhatsApp_Image_2026-05-31_at_5.11.04_PM.jpeg" 
              alt="PHINE PHARMA Logo" 
              className="h-12 w-auto"
            />
            <div>
              <div className="text-xl tracking-tight" style={{ color: '#07111F', fontWeight: 700 }}>
                PHINE PHARMA
              </div>
              <div className="text-xs" style={{ color: '#0891A8', fontWeight: 500 }}>
                Quality Manufacturing Partner
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-sm hover:opacity-60 transition-opacity" style={{ color: '#07111F', fontWeight: 600 }}>
              About
            </button>
            <button onClick={() => scrollToSection('why-choose-us')} className="text-sm hover:opacity-60 transition-opacity" style={{ color: '#07111F', fontWeight: 600 }}>
              Why Choose Us
            </button>
            <button onClick={() => scrollToSection('products')} className="text-sm hover:opacity-60 transition-opacity" style={{ color: '#07111F', fontWeight: 600 }}>
              Products
            </button>
            <button onClick={() => scrollToSection('services')} className="text-sm hover:opacity-60 transition-opacity" style={{ color: '#07111F', fontWeight: 600 }}>
              Services
            </button>
            <button onClick={() => scrollToSection('quality')} className="text-sm hover:opacity-60 transition-opacity" style={{ color: '#07111F', fontWeight: 600 }}>
              Quality
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-6 py-2.5 rounded-lg text-sm text-white transition-all hover:shadow-lg hover:scale-105" style={{ backgroundColor: '#0891A8', fontWeight: 600 }}>
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            style={{ color: '#07111F' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 pt-2 bg-white border-t">
            <nav className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('about')} className="text-left py-2 text-sm hover:opacity-60 transition-opacity" style={{ color: '#07111F', fontWeight: 600 }}>
                About
              </button>
              <button onClick={() => scrollToSection('why-choose-us')} className="text-left py-2 text-sm hover:opacity-60 transition-opacity" style={{ color: '#07111F', fontWeight: 600 }}>
                Why Choose Us
              </button>
              <button onClick={() => scrollToSection('products')} className="text-left py-2 text-sm hover:opacity-60 transition-opacity" style={{ color: '#07111F', fontWeight: 600 }}>
                Products
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left py-2 text-sm hover:opacity-60 transition-opacity" style={{ color: '#07111F', fontWeight: 600 }}>
                Services
              </button>
              <button onClick={() => scrollToSection('quality')} className="text-left py-2 text-sm hover:opacity-60 transition-opacity" style={{ color: '#07111F', fontWeight: 600 }}>
                Quality
              </button>
              <button onClick={() => scrollToSection('contact')} className="mt-2 w-full px-6 py-2.5 rounded-lg text-sm text-white transition-all" style={{ backgroundColor: '#0891A8', fontWeight: 600 }}>
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
