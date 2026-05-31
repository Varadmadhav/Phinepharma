import { motion } from "motion/react";
import { Factory, FileSignature, FileText, Box, FileCheck, Plane, ArrowRight } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Factory,
      title: "Third Party Manufacturing",
      description: "Complete manufacturing solutions for your pharmaceutical brand with flexible production capacity and quality assurance.",
      features: ["Custom formulations", "Scalable production", "Quality control"],
    },
    {
      icon: FileSignature,
      title: "Contract Manufacturing",
      description: "Long-term manufacturing partnerships with dedicated production lines and regulatory compliance support.",
      features: ["Dedicated capacity", "Cost-effective", "Reliable supply"],
    },
    {
      icon: FileText,
      title: "Drug Registration Assistance",
      description: "Expert guidance through the drug registration process with comprehensive documentation and regulatory support.",
      features: ["Registration support", "Documentation", "Compliance"],
    },
    {
      icon: FileCheck,
      title: "Dossier Preparation",
      description: "Professional preparation of technical dossiers for regulatory submissions and international markets.",
      features: ["CTD format", "Expert review", "Quality dossiers"],
    },
    {
      icon: Box,
      title: "Packaging Procurement",
      description: "End-to-end packaging solutions including design, procurement, and quality packaging materials.",
      features: ["Custom design", "Quality materials", "Cost optimization"],
    },
    {
      icon: Plane,
      title: "Export Services",
      description: "Comprehensive export support including documentation, logistics, and international market access.",
      features: ["Global reach", "Export compliance", "Logistics support"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm font-semibold text-[var(--teal)] mb-4 tracking-wider uppercase">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--navy)] mb-6">
            Comprehensive Pharmaceutical Services
          </h2>
          <p className="text-xl text-[var(--gray-600)] max-w-3xl mx-auto">
            End-to-end solutions for pharmaceutical manufacturing and distribution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 bg-[var(--gray-50)] rounded-2xl hover:bg-gradient-to-br hover:from-[var(--teal)] hover:to-[var(--teal-light)] hover:text-white transition-all cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--teal)] to-[var(--green)] group-hover:bg-white rounded-xl flex items-center justify-center mb-6 transition-all">
                  <Icon size={28} className="text-white group-hover:text-[var(--teal)] transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--navy)] group-hover:text-white mb-3 transition-colors">
                  {service.title}
                </h3>
                <p className="text-[var(--gray-600)] group-hover:text-white/90 mb-4 transition-colors">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[var(--gray-600)] group-hover:text-white/80 transition-colors">
                      <div className="w-1.5 h-1.5 bg-[var(--teal)] group-hover:bg-white rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-[var(--teal)] group-hover:text-white font-semibold transition-colors">
                  Learn More
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
