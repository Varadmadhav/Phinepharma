import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Manufacturing", href: "#manufacturing" },
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "Quality", href: "#quality" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img
              src="/src/imports/WhatsApp_Image_2026-05-31_at_5.11.04_PM.jpeg"
              alt="PHINE PHARMA"
              className="h-12 w-auto"
            />
            <div>
              <div className="font-bold text-xl text-[var(--navy)]">PHINE PHARMA</div>
              <div className="text-xs text-[var(--gray-600)]">Quality Medicines. Global Reach.</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[var(--gray-800)] hover:text-[var(--teal)] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-[var(--teal)] text-white rounded-lg hover:bg-[var(--teal-light)] transition-colors"
            >
              Partner With Us
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-sm font-medium text-[var(--gray-800)] hover:text-[var(--teal)]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-4 px-6 py-2.5 bg-[var(--teal)] text-white rounded-lg text-center"
              onClick={() => setIsOpen(false)}
            >
              Partner With Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
