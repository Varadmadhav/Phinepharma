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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/45 backdrop-blur-[12px] border-b border-white/45 transition-all duration-300 shadow-sm shadow-slate-100/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src="/src/imports/WhatsApp_Image_2026-05-31_at_5.11.04_PM.jpeg"
                alt="PHINE PHARMA"
                className="h-12 w-auto rounded-lg shadow-sm border border-slate-200/50 hover:scale-105 transition-transform"
              />
              <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-teal"></span>
              </span>
            </div>
            <div>
              <div className="font-extrabold text-xl text-slate-900 tracking-tight flex items-center gap-1.5">
                PHINE PHARMA
              </div>
              <div className="text-[10px] text-teal font-extrabold tracking-wider uppercase font-mono">Quality Medicines • Global Reach</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-bold text-slate-650 hover:text-teal transition-all relative group py-1.5 tracking-wide"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-teal to-teal-light transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="relative overflow-hidden px-6 py-2.5 bg-gradient-to-r from-teal to-indigo-accent text-white font-bold rounded-xl shadow-md shadow-teal/10 hover:shadow-[0_0_25px_rgba(13,148,136,0.35)] transition-all duration-350 hover:scale-[1.03] active:scale-95 group flex items-center justify-center
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 before:ease-in-out"
            >
              <span className="relative z-10">Partner With Us</span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-800 hover:text-teal transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-xl">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 px-4 text-sm font-semibold text-slate-700 hover:text-teal hover:bg-slate-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <a
                href="#contact"
                className="block py-3 bg-gradient-to-r from-teal to-indigo-accent text-white font-semibold rounded-xl text-center shadow-md shadow-teal/10"
                onClick={() => setIsOpen(false)}
              >
                Partner With Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
