import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Shield, Factory, Package, FileCheck, Box, Globe, Zap, CheckCircle2 } from 'lucide-react';

export function WhyChooseSection() {
  const { ref, inView } = useInView();

  const features = [
    {
      icon: Shield,
      title: 'WHO-GMP Certified',
      description: 'Internationally recognized quality standards and certifications for pharmaceutical manufacturing.',
      color: '#0891A8'
    },
    {
      icon: Factory,
      title: 'Third Party Manufacturing',
      description: 'State-of-the-art facilities equipped to manufacture your pharmaceutical products at scale.',
      color: '#10B981'
    },
    {
      icon: Package,
      title: 'Large Product Portfolio',
      description: 'Extensive range of tablets, capsules, syrups, and injectables across therapeutic categories.',
      color: '#F59E0B'
    },
    {
      icon: FileCheck,
      title: 'Regulatory Support',
      description: 'Complete regulatory documentation and compliance support for domestic and international markets.',
      color: '#0891A8'
    },
    {
      icon: Box,
      title: 'Packaging Excellence',
      description: 'Premium packaging solutions with customization options to meet your brand requirements.',
      color: '#10B981'
    },
    {
      icon: Globe,
      title: 'Export Support',
      description: 'End-to-end export services including documentation, logistics, and market entry support.',
      color: '#F59E0B'
    },
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Efficient production processes ensuring quick delivery without compromising on quality.',
      color: '#0891A8'
    },
    {
      icon: CheckCircle2,
      title: 'Quality Control',
      description: 'Rigorous quality testing at every stage from raw material to finished product.',
      color: '#10B981'
    },
  ];

  return (
    <section id="why-choose-us" className="py-24" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-lg mb-6" style={{ backgroundColor: 'rgba(8, 145, 168, 0.1)' }}>
            <span className="text-sm" style={{ color: '#0891A8', fontWeight: 700 }}>WHY CHOOSE US</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl mb-6 max-w-3xl mx-auto leading-tight" style={{ color: '#07111F', fontWeight: 800 }}>
            Your Trusted{' '}
            <span style={{ color: '#0891A8' }}>Pharmaceutical Manufacturing</span>{' '}
            Partner
          </h2>
          
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4B5563', fontWeight: 400 }}>
            Industry-leading capabilities and commitment to excellence that set us apart
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105"
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon size={28} style={{ color: feature.color }} />
              </div>
              
              <h3 className="text-xl mb-3" style={{ color: '#07111F', fontWeight: 700 }}>
                {feature.title}
              </h3>
              
              <p className="leading-relaxed" style={{ color: '#6B7280', fontWeight: 400 }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
