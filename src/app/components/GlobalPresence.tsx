import { motion } from "motion/react";
import { Globe, MapPin, TrendingUp, Users } from "lucide-react";

export function GlobalPresence() {
  const markets = [
    "Asia Pacific",
    "Middle East",
    "Africa",
    "Latin America",
    "CIS Countries",
    "Southeast Asia",
  ];

  const stats = [
    { icon: Globe, value: "50+", label: "Export Countries" },
    { icon: MapPin, value: "100+", label: "Distribution Partners" },
    { icon: TrendingUp, value: "40%", label: "Annual Growth" },
    { icon: Users, value: "500+", label: "Healthcare Partners" },
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
            Global Presence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--navy)] mb-6">
            Serving Healthcare Worldwide
          </h2>
          <p className="text-xl text-[var(--gray-600)] max-w-3xl mx-auto">
            Our pharmaceutical products reach patients across the globe through a robust distribution network
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-video bg-gradient-to-br from-[var(--navy)] to-[var(--gray-800)] rounded-2xl p-8 overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-64 h-64 bg-[var(--teal)] rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-[var(--green)] rounded-full blur-3xl" />
              </div>

              <div className="relative h-full flex items-center justify-center">
                <Globe size={200} className="text-white/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-white mb-2">50+</div>
                    <div className="text-2xl text-gray-300">Countries Worldwide</div>
                  </div>
                </div>
              </div>

              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-[var(--teal)] rounded-full"
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-[var(--navy)] mb-6">
              International Export Markets
            </h3>
            <p className="text-lg text-[var(--gray-600)] mb-8">
              We have established a strong presence in key pharmaceutical markets worldwide, providing affordable healthcare solutions to millions of patients.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {markets.map((market, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm"
                >
                  <MapPin size={20} className="text-[var(--teal)]" />
                  <span className="font-medium text-[var(--navy)]">{market}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-2xl shadow-sm text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--teal)] to-[var(--green)] rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Icon size={28} className="text-white" />
                </div>
                <div className="text-4xl font-bold text-[var(--navy)] mb-2">{stat.value}</div>
                <div className="text-[var(--gray-600)]">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
