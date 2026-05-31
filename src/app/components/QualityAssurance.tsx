import { motion } from "motion/react";
import { ShieldCheck, Award, FileCheck, TestTube, ClipboardCheck, BarChart } from "lucide-react";

export function QualityAssurance() {
  const qualityFeatures = [
    {
      icon: Award,
      title: "GMP Standards",
      description: "WHO-GMP certified manufacturing processes ensuring international quality compliance",
    },
    {
      icon: TestTube,
      title: "Quality Testing",
      description: "Comprehensive laboratory testing at every stage of production",
    },
    {
      icon: FileCheck,
      title: "Documentation",
      description: "Complete batch manufacturing records and quality documentation",
    },
    {
      icon: ClipboardCheck,
      title: "Compliance Systems",
      description: "Robust quality management systems and standard operating procedures",
    },
    {
      icon: BarChart,
      title: "Quality Controls",
      description: "In-process quality checks and finished product testing",
    },
    {
      icon: ShieldCheck,
      title: "Certifications",
      description: "Multiple certifications and regular regulatory inspections",
    },
  ];

  return (
    <section id="quality" className="py-24 bg-gradient-to-br from-[var(--navy)] to-[var(--gray-800)] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm font-semibold text-[var(--teal-light)] mb-4 tracking-wider uppercase">
            Quality Assurance
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Uncompromising Quality Standards
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Quality is at the heart of everything we do, ensuring safe and effective medicines
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {qualityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--teal)] to-[var(--green)] rounded-xl flex items-center justify-center mb-6">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-12 text-center"
        >
          <ShieldCheck size={64} className="mx-auto mb-6 text-[var(--green)]" />
          <h3 className="text-3xl font-bold mb-4">WHO-GMP Certified</h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Our manufacturing facilities meet the highest international quality standards set by the World Health Organization. Every product is manufactured under strict GMP guidelines with comprehensive quality control measures.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="px-6 py-3 bg-[var(--teal)]/20 border border-[var(--teal)] rounded-lg">
              <span className="font-semibold">WHO-GMP Certified</span>
            </div>
            <div className="px-6 py-3 bg-[var(--green)]/20 border border-[var(--green)] rounded-lg">
              <span className="font-semibold">ISO Compliant</span>
            </div>
            <div className="px-6 py-3 bg-[var(--gold)]/20 border border-[var(--gold)] rounded-lg">
              <span className="font-semibold">Regular Audits</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
