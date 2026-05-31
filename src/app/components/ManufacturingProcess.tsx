import { motion } from "motion/react";
import {
  FileSearch,
  DollarSign,
  FileCheck,
  Package,
  Megaphone,
  Factory,
  TestTube,
  ShieldCheck,
  Truck,
} from "lucide-react";

export function ManufacturingProcess() {
  const steps = [
    { icon: FileSearch, title: "Product Finalization", description: "Define specifications and requirements" },
    { icon: DollarSign, title: "Quotation", description: "Competitive pricing and terms" },
    { icon: FileCheck, title: "Documentation Verification", description: "Ensure all regulatory compliance" },
    { icon: Package, title: "Packaging Planning", description: "Design and material selection" },
    { icon: Megaphone, title: "Promotional Material", description: "Marketing and support materials" },
    { icon: Factory, title: "Manufacturing", description: "Production with quality controls" },
    { icon: TestTube, title: "Quality Testing", description: "Comprehensive laboratory analysis" },
    { icon: ShieldCheck, title: "Compliance Verification", description: "Final regulatory checks" },
    { icon: Truck, title: "Product Delivery", description: "Timely and secure shipment" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[var(--navy)] to-[var(--gray-800)] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm font-semibold text-[var(--teal-light)] mb-4 tracking-wider uppercase">
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Streamlined Manufacturing Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A systematic approach ensuring quality, compliance, and timely delivery
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--teal)] via-[var(--green)] to-[var(--gold)]" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--teal)] to-[var(--green)] rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <Icon size={32} className="text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-[var(--gold)] mb-2">
                        Step {index + 1}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-300 text-sm">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
