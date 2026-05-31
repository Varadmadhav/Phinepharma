import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ManufacturingExcellence() {
  const capabilities = [
    "State-of-the-art manufacturing facilities",
    "Advanced quality control laboratories",
    "WHO-GMP certified production lines",
    "ISO compliance and documentation",
    "Trained and experienced workforce",
    "Scalable production capacity",
  ];

  return (
    <section id="manufacturing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm font-semibold text-[var(--teal)] mb-4 tracking-wider uppercase">
            Manufacturing Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--navy)] mb-6">
            World-Class Manufacturing Facilities
          </h2>
          <p className="text-xl text-[var(--gray-600)] max-w-3xl mx-auto">
            Our cutting-edge facilities combine advanced technology with stringent quality controls
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-[var(--navy)] mb-6">
                Manufacturing Capabilities
              </h3>
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-[var(--green)] flex-shrink-0 mt-1" />
                    <span className="text-lg text-[var(--gray-600)]">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="p-6 bg-[var(--gray-50)] rounded-xl text-center">
                <div className="text-4xl font-bold text-[var(--teal)] mb-2">10+</div>
                <div className="text-sm text-[var(--gray-600)]">Years Experience</div>
              </div>
              <div className="p-6 bg-[var(--gray-50)] rounded-xl text-center">
                <div className="text-4xl font-bold text-[var(--teal)] mb-2">500+</div>
                <div className="text-sm text-[var(--gray-600)]">Products</div>
              </div>
              <div className="p-6 bg-[var(--gray-50)] rounded-xl text-center">
                <div className="text-4xl font-bold text-[var(--teal)] mb-2">50+</div>
                <div className="text-sm text-[var(--gray-600)]">Countries</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1581093577421-f561a654a353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Manufacturing facility"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Quality control"
                className="w-full h-48 object-cover rounded-2xl"
              />
            </div>
            <div className="space-y-4 pt-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Laboratory testing"
                className="w-full h-48 object-cover rounded-2xl"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Production line"
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
