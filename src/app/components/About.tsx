import { motion } from "motion/react";

export function About() {
  const values = [
    {
      label: "BIO-EFF",
      title: "Bio-Availability Optimization",
      description: "Maximizing therapeutic absorption and chemical yield via advanced formulation synthesis.",
      icon: (
        <svg className="w-6 h-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4.5 16.5L9 19L13.5 16.5V11.5L9 9L4.5 11.5V16.5Z" className="stroke-teal/70" />
          <path d="M13.5 11.5L18 9L22.5 11.5V16.5L18 19L13.5 16.5" className="stroke-indigo-500/70" />
          <circle cx="9" cy="9" r="1.5" className="fill-teal animate-pulse" />
          <circle cx="18" cy="9" r="1.5" className="fill-indigo-500" />
          <circle cx="13.5" cy="11.5" r="1.5" className="fill-green" />
          <path d="M9 9L9 5" strokeDasharray="2 2" className="stroke-slate-400" />
          <circle cx="9" cy="4" r="1" className="fill-slate-400" />
        </svg>
      )
    },
    {
      label: "QA-AUDIT",
      title: "Audit-Ready Quality Assurance",
      description: "Rigorous WHO-GMP and ISO compliance auditing for total batch traceability and safety.",
      icon: (
        <svg className="w-6 h-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="2" className="stroke-teal/50" />
          <path d="M8 9h5M8 13h8M8 17h4" strokeLinecap="round" />
          <path d="M14 3H10v2h4V3Z" className="fill-teal" />
          <path d="M18 7l2 2-4 4" className="stroke-green" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      label: "CDMO-PART",
      title: "Strategic CDMO Partnerships",
      description: "Seamless turnkey contract manufacturing scaled for commercial volume and regulatory approval.",
      icon: (
        <svg className="w-6 h-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="4" className="stroke-teal/80" />
          <circle cx="12" cy="12" r="8" className="stroke-teal/30" strokeDasharray="3 3" />
          <circle cx="12" cy="4" r="2.5" className="fill-teal animate-pulse" />
          <circle cx="4" cy="16" r="2.5" className="fill-indigo-500" />
          <circle cx="20" cy="16" r="2.5" className="fill-green" />
          <path d="M12 6.5v1.5M5.5 15l1.5-1M18.5 15l-1.5-1" className="stroke-slate-400" strokeLinecap="round" />
        </svg>
      )
    },
    {
      label: "SC-RESIL",
      title: "Global Supply Chain Resiliency",
      description: "Secured international cold-chain and regulatory customs pathways spanning over 50 countries.",
      icon: (
        <svg className="w-6 h-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" className="stroke-teal/40" />
          <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9z" className="stroke-teal/60" />
          <circle cx="12" cy="12" r="1.5" className="fill-indigo-500" />
        </svg>
      )
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-teal/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-xs font-bold text-teal mb-4 tracking-widest uppercase">
              // CDMO_OVERVIEW_MODULE
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Pioneering Advanced Clinical-Grade Formulations
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              PHINE PHARMA LLP is a WHO-GMP and ISO 9001:2015 aligned CDMO (Contract Development and Manufacturing Organization) specializing in high-yield solid dosage, advanced liquid formulations, and sterile injectables. Our operational architecture bridges the gap between molecular discovery and commercial-scale manufacturing.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our commitment to validated quality control systems, complete batch trace audits, and client satisfaction has made us a trusted partner for global distributors, health systems, and international buyers across the globe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => {
              return (
                <div
                  key={index}
                  className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:border-teal/30 hover:shadow-[0_10px_30px_rgba(13,148,136,0.08)] transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Technical Ticks */}
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-slate-200 group-hover:border-teal/50 rounded-tr-2xl transition-colors" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-slate-200 group-hover:border-teal/50 rounded-bl-2xl transition-colors" />

                  {/* Telemetry Tag */}
                  <span className="absolute top-3 right-4 font-mono text-[9px] text-slate-400 group-hover:text-teal/75 transition-colors">
                    [{value.label}]
                  </span>

                  <div className="w-12 h-12 bg-slate-100 group-hover:bg-teal/5 border border-slate-200/50 group-hover:border-teal/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-500 group-hover:text-slate-650 transition-colors">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
