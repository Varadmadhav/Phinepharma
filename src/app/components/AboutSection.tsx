import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Heart, Users, TrendingUp, Globe2 } from 'lucide-react';

export function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwcmVzZWFyY2glMjBzY2llbnRpc3R8ZW58MXx8fHwxNzgwMjI4NjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="PHINE PHARMA Laboratory"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Decorative Element */}
            <div 
              className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl -z-10"
              style={{ backgroundColor: '#0891A8', opacity: 0.1 }}
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-2 rounded-lg mb-6" style={{ backgroundColor: 'rgba(8, 145, 168, 0.1)' }}>
              <span className="text-sm" style={{ color: '#0891A8', fontWeight: 700 }}>ABOUT PHINE PHARMA</span>
            </div>

            <h2 className="text-4xl sm:text-5xl mb-6 leading-tight" style={{ color: '#07111F', fontWeight: 800 }}>
              Committed to{' '}
              <span style={{ color: '#0891A8' }}>Affordable Healthcare</span>{' '}
              for Everyone
            </h2>

            <p className="text-lg mb-6 leading-relaxed" style={{ color: '#4B5563', fontWeight: 400 }}>
              PHINE PHARMA LLP is a WHO-GMP certified pharmaceutical manufacturing company dedicated to making quality healthcare accessible and affordable worldwide. We believe that everyone deserves access to safe, effective, and affordable medicines.
            </p>

            <p className="text-lg mb-8 leading-relaxed" style={{ color: '#4B5563', fontWeight: 400 }}>
              With over a decade of experience in pharmaceutical manufacturing, we combine ethical business practices with cutting-edge technology to deliver excellence. Our commitment to transparency, customer satisfaction, and regulatory compliance has made us a trusted partner for businesses across domestic and international markets.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Heart, title: 'Affordable Healthcare', description: 'Making quality medicines accessible to all' },
                { icon: Users, title: 'Customer First', description: 'Building long-term partnerships based on trust' },
                { icon: TrendingUp, title: 'Ethical Practices', description: 'Transparency in every business decision' },
                { icon: Globe2, title: 'Global Standards', description: 'WHO-GMP certified manufacturing processes' },
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(8, 145, 168, 0.1)' }}>
                    <value.icon size={24} style={{ color: '#0891A8' }} />
                  </div>
                  <div>
                    <h3 className="mb-1" style={{ color: '#07111F', fontWeight: 700 }}>{value.title}</h3>
                    <p className="text-sm" style={{ color: '#6B7280' }}>{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
