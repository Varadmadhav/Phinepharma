import { motion } from 'motion/react';
import { Shield, Award, Globe, CheckCircle, Clock } from 'lucide-react';

export function HeroSection() {
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
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#07111F' }}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(8, 145, 168, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)'
          }}
        />
        
        {/* Molecular Network Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="molecule-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="#0891A8" />
                <circle cx="50" cy="30" r="2" fill="#10B981" />
                <circle cx="80" cy="15" r="2" fill="#F59E0B" />
                <circle cx="30" cy="70" r="2" fill="#0891A8" />
                <circle cx="70" cy="80" r="2" fill="#10B981" />
                <line x1="10" y1="10" x2="50" y2="30" stroke="#0891A8" strokeWidth="0.5" />
                <line x1="50" y1="30" x2="80" y2="15" stroke="#10B981" strokeWidth="0.5" />
                <line x1="30" y1="70" x2="70" y2="80" stroke="#F59E0B" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#molecule-pattern)" />
          </svg>
        </div>

        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: i % 3 === 0 ? '#0891A8' : i % 3 === 1 ? '#10B981' : '#F59E0B',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: 'rgba(8, 145, 168, 0.15)', border: '1px solid rgba(8, 145, 168, 0.3)' }}
            >
              <span className="text-sm" style={{ color: '#06B6D4', fontWeight: 600 }}>
                WHO-GMP Certified Manufacturing Partner
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight" style={{ color: '#ffffff', fontWeight: 800 }}>
              Quality Medicines.{' '}
              <span style={{ color: '#06B6D4' }}>Trusted Manufacturing.</span>{' '}
              <span style={{ color: '#10B981' }}>Global Reach.</span>
            </h1>

            <p className="text-lg sm:text-xl mb-10 leading-relaxed opacity-90" style={{ color: '#E5E7EB', fontWeight: 400 }}>
              WHO-GMP certified pharmaceutical manufacturing partner delivering affordable healthcare solutions through third-party manufacturing, contract manufacturing, regulatory support, and export services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => scrollToSection('products')}
                className="px-8 py-4 rounded-lg text-white transition-all hover:shadow-2xl hover:scale-105" 
                style={{ backgroundColor: '#0891A8', fontWeight: 700 }}
              >
                Explore Products
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 rounded-lg transition-all hover:bg-white/20" 
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', border: '2px solid rgba(255, 255, 255, 0.3)', fontWeight: 700 }}
              >
                Partner With Us
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { icon: Shield, label: 'WHO-GMP Certified' },
                { icon: Award, label: 'Quality Assurance' },
                { icon: CheckCircle, label: 'Regulatory Expertise' },
                { icon: Globe, label: 'Global Reach' },
                { icon: Clock, label: '10+ Years' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-2" style={{ backgroundColor: 'rgba(8, 145, 168, 0.2)' }}>
                    <item.icon size={20} style={{ color: '#06B6D4' }} />
                  </div>
                  <p className="text-xs" style={{ color: '#E5E7EB', fontWeight: 600 }}>
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1602052577122-f73b9710adba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMG1hbnVmYWN0dXJpbmclMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc4MDIyODY2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Pharmaceutical Manufacturing"
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(8, 145, 168, 0.3) 0%, rgba(16, 185, 129, 0.2) 100%)' }}
              />
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -left-4 top-1/4 bg-white rounded-2xl p-6 shadow-2xl"
              style={{ maxWidth: '200px' }}
            >
              <div className="text-4xl mb-2" style={{ color: '#0891A8', fontWeight: 800 }}>500+</div>
              <p className="text-sm" style={{ color: '#07111F', fontWeight: 600 }}>Products Manufactured</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -right-4 bottom-1/4 bg-white rounded-2xl p-6 shadow-2xl"
              style={{ maxWidth: '200px' }}
            >
              <div className="text-4xl mb-2" style={{ color: '#10B981', fontWeight: 800 }}>25+</div>
              <p className="text-sm" style={{ color: '#07111F', fontWeight: 600 }}>Export Markets</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-1" style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}>
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: '#06B6D4' }}
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
