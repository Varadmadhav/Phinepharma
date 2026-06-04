import { motion } from "motion/react";
import { CheckCircle, ArrowRight } from "lucide-react";

export function Hero() {
  const trustIndicators = [
    "WHO-GMP Certified",
    "Quality Assurance",
    "Regulatory Expertise",
    "Global Reach",
    "10+ Years Experience",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectFit: "cover" }}
        >
          <source src="/fallbackk.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)]/80 via-[var(--navy)]/60 to-[var(--navy)]/85" />
      </div>

      {/* Subtle ambient glow effects over the video */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-15">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[var(--teal)] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--gold)] rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-[1] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-[2] max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Quality Medicines.<br />
            Trusted Manufacturing.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--teal-light)] to-[var(--green)]">
              Global Reach.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed drop-shadow-lg"
        >
          WHO-GMP certified pharmaceutical manufacturing partner delivering affordable healthcare solutions through third-party manufacturing, contract manufacturing, regulatory support, and export services.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#products"
            className="px-8 py-4 bg-[var(--teal)] text-white rounded-lg font-medium hover:bg-[var(--teal-light)] transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-[var(--teal)]/30"
          >
            Explore Products
            <ArrowRight size={20} />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-lg font-medium hover:bg-white/20 transition-all"
          >
            Partner With Us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
        >
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-200 drop-shadow-md">
              <CheckCircle size={20} className="text-[var(--green)]" />
              <span className="text-sm md:text-base font-medium">{indicator}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-[2]">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
