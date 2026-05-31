import { motion } from "motion/react";
import { Target, Heart, Users, Globe } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Affordable Healthcare",
      description: "Committed to making quality medicines accessible to all",
    },
    {
      icon: Target,
      title: "Ethical Practices",
      description: "Transparency and integrity in every aspect of our business",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Building long-term partnerships through exceptional service",
    },
    {
      icon: Globe,
      title: "Global Operations",
      description: "Serving domestic and international markets with excellence",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-semibold text-[var(--teal)] mb-4 tracking-wider uppercase">
              About PHINE PHARMA
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--navy)] mb-6">
              Delivering Excellence in Pharmaceutical Manufacturing
            </h2>
            <p className="text-lg text-[var(--gray-600)] mb-6 leading-relaxed">
              PHINE PHARMA LLP is a WHO-GMP certified pharmaceutical manufacturing company dedicated to providing affordable healthcare solutions to patients worldwide. With over a decade of experience, we specialize in third-party manufacturing, contract manufacturing, and export services.
            </p>
            <p className="text-lg text-[var(--gray-600)] leading-relaxed">
              Our commitment to quality, transparency, and customer satisfaction has made us a trusted partner for pharmaceutical distributors, healthcare providers, and international buyers across the globe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-[var(--gray-50)] rounded-2xl hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--teal)] to-[var(--green)] rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--navy)] mb-2">{value.title}</h3>
                  <p className="text-sm text-[var(--gray-600)]">{value.description}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
