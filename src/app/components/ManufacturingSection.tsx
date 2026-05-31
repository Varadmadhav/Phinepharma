import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Factory, Microscope, ShieldCheck, Award } from 'lucide-react';

export function ManufacturingSection() {
  const { ref, inView } = useInView();

  const capabilities = [
    {
      icon: Factory,
      title: 'Modern Infrastructure',
      description: 'State-of-the-art manufacturing units designed for optimal production efficiency and quality control.',
      stats: '50,000 sq ft'
    },
    {
      icon: Microscope,
      title: 'Advanced R&D',
      description: 'Dedicated research and development team working on formulation development and process optimization.',
      stats: '100+ Formulations'
    },
    {
      icon: ShieldCheck,
      title: 'Quality Systems',
      description: 'Robust quality management systems ensuring compliance with international pharmaceutical standards.',
      stats: 'ISO Certified'
    },
    {
      icon: Award,
      title: 'Production Capacity',
      description: 'Large-scale production capabilities to meet high-volume requirements without compromising quality.',
      stats: '10M+ Units/Month'
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-lg mb-6" style={{ backgroundColor: 'rgba(8, 145, 168, 0.1)' }}>
            <span className="text-sm" style={{ color: '#0891A8', fontWeight: 700 }}>MANUFACTURING EXCELLENCE</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl mb-6 max-w-3xl mx-auto leading-tight" style={{ color: '#07111F', fontWeight: 800 }}>
            World-Class{' '}
            <span style={{ color: '#0891A8' }}>Manufacturing Facilities</span>
          </h2>
          
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4B5563', fontWeight: 400 }}>
            Our WHO-GMP certified facilities are equipped with cutting-edge technology and operated by experienced professionals
          </p>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl mb-16"
        >
          <img 
            src="https://images.unsplash.com/photo-1602052577122-f73b9710adba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMG1hbnVmYWN0dXJpbmclMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc4MDIyODY2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Manufacturing Facility"
            className="w-full h-[500px] object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(7, 17, 31, 0.7) 0%, transparent 50%)' }}
          />
          
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
            <div className="max-w-3xl">
              <h3 className="text-3xl sm:text-4xl mb-4" style={{ color: '#ffffff', fontWeight: 800 }}>
                Pharmaceutical Excellence in Every Product
              </h3>
              <p className="text-lg" style={{ color: '#E5E7EB', fontWeight: 400 }}>
                Our facilities meet the highest international standards for pharmaceutical manufacturing
              </p>
            </div>
          </div>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl p-8 border-2 hover:shadow-lg transition-all h-full" style={{ borderColor: '#E5E7EB' }}>
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'rgba(8, 145, 168, 0.1)' }}
                >
                  <capability.icon size={32} style={{ color: '#0891A8' }} />
                </div>
                
                <div className="text-3xl mb-3" style={{ color: '#0891A8', fontWeight: 800 }}>
                  {capability.stats}
                </div>
                
                <h3 className="text-xl mb-3" style={{ color: '#07111F', fontWeight: 700 }}>
                  {capability.title}
                </h3>
                
                <p style={{ color: '#6B7280', fontWeight: 400 }}>
                  {capability.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
