import { motion } from "motion/react";
import { Award, Factory, Package, FileCheck, Box, Plane, Zap, ShieldCheck } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: "WHO-GMP Certified",
      description: "International quality standards compliance",
    },
    {
      icon: Factory,
      title: "Third Party Manufacturing",
      description: "Complete manufacturing solutions for your brand",
    },
    {
      icon: Package,
      title: "Large Product Portfolio",
      description: "Tablets, capsules, syrups, and injectables",
    },
    {
      icon: FileCheck,
      title: "Regulatory Support",
      description: "Expert assistance with documentation and compliance",
    },
    {
      icon: Box,
      title: "Packaging Excellence",
      description: "Premium packaging solutions and design support",
    },
    {
      icon: Plane,
      title: "Export Support",
      description: "Global reach with comprehensive export services",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Efficient production and delivery timelines",
    },
    {
      icon: ShieldCheck,
      title: "Quality Control",
      description: "Rigorous testing at every stage of production",
    },
  ];

  return (
    <section className="py-24 bg-[var(--gray-50)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm font-semibold text-[var(--teal)] mb-4 tracking-wider uppercase">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--navy)] mb-6">
            Your Trusted Manufacturing Partner
          </h2>
          <p className="text-xl text-[var(--gray-600)] max-w-3xl mx-auto">
            Combining world-class facilities, regulatory expertise, and commitment to quality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--teal)] to-[var(--teal-light)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--navy)] mb-3">{feature.title}</h3>
                <p className="text-[var(--gray-600)]">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
