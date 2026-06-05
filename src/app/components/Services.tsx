import { motion } from "motion/react";

export function Services() {
  const services = [
    {
      label: "CDMO-THIRD",
      title: "Third Party Manufacturing",
      description: "Complete formulation scaling under WHO-GMP compliance, providing custom batch runs with strict molecular validation.",
      features: ["Custom synthesis synthesis", "ISO cleanroom processing", "HPLC purity profiling"],
      icon: (
        <svg className="w-7 h-7 text-white group-hover:text-teal transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 3v6M18 3v6M6 9a6 6 0 0012 0M8 15h8M12 9v9" />
          <circle cx="12" cy="18" r="2" className="fill-current" />
          <path d="M3 21h18" className="opacity-50" />
        </svg>
      )
    },
    {
      label: "CDMO-CONTRACT",
      title: "Contract Manufacturing",
      description: "Long-term CDMO production agreements backed by validated HVAC spaces, dedicated lines, and ICH stability studies.",
      features: ["Dedicated capacity loops", "ICH stability profiling", "SOW cost optimization"],
      icon: (
        <svg className="w-7 h-7 text-white group-hover:text-teal transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="8" strokeDasharray="3 3" className="opacity-50" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
        </svg>
      )
    },
    {
      label: "REG-AFFAIR",
      title: "Drug Registration Support",
      description: "Regulatory filing assistance for target healthcare markets, facilitating pharmacopoeia and customs alignment.",
      features: ["Global registry audits", "USP/BP pharmacopoeia checks", "Customs declaration validation"],
      icon: (
        <svg className="w-7 h-7 text-white group-hover:text-teal transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 11l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 2v2M2 12h2" className="opacity-50" />
        </svg>
      )
    },
    {
      label: "ECTD-DOSSIER",
      title: "Dossier Compilation",
      description: "Technical writing and compilation of high-quality drug dossiers strictly conforming to CTD and eCTD specifications.",
      features: ["eCTD format validation", "CMC section writing", "Regulatory submission audits"],
      icon: (
        <svg className="w-7 h-7 text-white group-hover:text-teal transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 6h16M4 10h16M4 14h16M4 18h12" strokeLinecap="round" />
          <rect x="14" y="12" width="7" height="9" rx="1" className="fill-current opacity-20" />
        </svg>
      )
    },
    {
      label: "PKG-SEAL",
      title: "Packaging Engineering",
      description: "Sourcing and verification of high-barrier blister packaging, Alu-Alu configurations, and tamper-resistant seals.",
      features: ["Alu-Alu barrier setups", "Anti-counterfeiting seals", "Child-resistant designs"],
      icon: (
        <svg className="w-7 h-7 text-white group-hover:text-teal transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8" cy="8" r="1.5" className="fill-current" />
          <circle cx="16" cy="8" r="1.5" className="fill-current" />
          <circle cx="8" cy="16" r="1.5" className="fill-current" />
          <circle cx="16" cy="16" r="1.5" className="fill-current" />
        </svg>
      )
    },
    {
      label: "EXP-LOGIS",
      title: "Export Logistics",
      description: "End-to-end supply chain logistics coordination, offering validated cold-chain shipping channels and transit logs.",
      features: ["Pulsed shipping routes", "FDA customs verification", "Tracked thermal cold-chain"],
      icon: (
        <svg className="w-7 h-7 text-white group-hover:text-teal transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9z" className="opacity-50" />
        </svg>
      )
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/3 w-[40vw] h-[40vw] rounded-full bg-teal/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-xs font-bold text-teal mb-4 tracking-widest uppercase">
            // CDMO_SERVICE_MATRIX
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Comprehensive Pharmaceutical Services
          </h2>
          <p className="text-xl text-slate-650 max-w-3xl mx-auto">
            End-to-end solutions for pharmaceutical formulation development, dossier setup, and global supply.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-gradient-to-br hover:from-teal hover:to-indigo-500 hover:border-transparent hover:text-white hover:shadow-[0_10px_35px_rgba(13,148,136,0.06)] transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* Technical Corner Ticks */}
                <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t border-r border-slate-200 group-hover:border-white/30 rounded-tr-2xl transition-colors" />
                <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b border-l border-slate-200 group-hover:border-white/30 rounded-bl-2xl transition-colors" />

                <span className="absolute top-3 right-4 font-mono text-[9px] text-slate-400 group-hover:text-white/60 transition-colors">
                  [{service.label}]
                </span>

                <div className="w-14 h-14 bg-gradient-to-br from-teal to-green group-hover:from-white group-hover:to-white rounded-xl flex items-center justify-center mb-6 transition-all duration-300 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 group-hover:text-white/90 mb-4 transition-colors text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-655 group-hover:text-white/80 transition-colors">
                      <div className="w-1.5 h-1.5 bg-teal group-hover:bg-white rounded-full transition-colors" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-teal group-hover:text-white font-semibold transition-colors text-sm">
                  Request Info
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
