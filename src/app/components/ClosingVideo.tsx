import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";

export function ClosingVideo() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
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
          <source src="/fallback.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/90 via-[var(--navy)]/60 to-[var(--navy)]/80" />
      </div>

      {/* Content */}
      <div className="relative z-[2] text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
            Your Trusted Partner in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--teal-light)] to-[var(--green)]">
              Pharmaceutical Excellence
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 drop-shadow-lg">
            Building a healthier world, one quality product at a time.
          </p>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <span>Back to Top</span>
            <ArrowUp
              size={20}
              className="transition-transform group-hover:-translate-y-1"
            />
          </button>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] py-4 text-center bg-[var(--navy)]/80 backdrop-blur-sm">
        <p className="text-sm text-gray-400">
          © 2026 PHINE PHARMA LLP. All rights reserved. | Quality Medicines.
          Trusted Manufacturing. Global Reach.
        </p>
      </div>
    </section>
  );
}
