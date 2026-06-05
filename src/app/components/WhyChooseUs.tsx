import { motion } from "motion/react";

export function WhyChooseUs() {
  const features = [
    {
      label: "WHO-GMP",
      title: "WHO-GMP System Compliance",
      description: "Validated QA/QC protocols meeting global regulatory standards.",
      icon: (
        <svg className="w-7 h-7 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="stroke-teal/70" />
          <path d="M9 11l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" className="stroke-green" />
          <circle cx="12" cy="12" r="9" className="stroke-teal/20" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      label: "CDMO-SCALE",
      title: "End-to-End CDMO Scaling",
      description: "Seamless batch scalability from laboratory pilot runs up to commercial yields.",
      icon: (
        <svg className="w-7 h-7 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 3v6M18 3v6M6 9a6 6 0 0012 0M8 15h8M12 9v9" className="stroke-teal" />
          <circle cx="6" cy="3" r="1" className="fill-slate-400" />
          <circle cx="18" cy="3" r="1" className="fill-slate-400" />
          <circle cx="12" cy="18" r="2" className="fill-teal animate-pulse" />
          <path d="M3 21h18" className="stroke-teal/40" />
        </svg>
      )
    },
    {
      label: "FORM-LIB",
      title: "Diverse Formulation Library",
      description: "Solid oral dosages, hard-shell capsules, syrups, and sterile injectables.",
      icon: (
        <svg className="w-7 h-7 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="10" width="10" height="6" rx="3" className="stroke-teal/80 rotate-45" />
          <circle cx="16" cy="16" r="4" className="stroke-indigo-500/70" />
          <path d="M14 16h4" className="stroke-indigo-500/50" />
          <path d="M5 5h3M5 8h5" strokeLinecap="round" className="stroke-slate-400" />
        </svg>
      )
    },
    {
      label: "eCTD-REG",
      title: "eCTD & Dossier Synthesis",
      description: "Expert assistance compiling CTD/eCTD dossiers for global drug registrations.",
      icon: (
        <svg className="w-7 h-7 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 6h16M4 10h16M4 14h16M4 18h12" strokeLinecap="round" className="stroke-teal/50" />
          <rect x="14" y="12" width="7" height="9" rx="1" className="stroke-indigo-500 fill-white" />
          <path d="M16 15h3M16 18h2" strokeLinecap="round" className="stroke-indigo-500/60" />
        </svg>
      )
    },
    {
      label: "BARRIER-PKG",
      title: "Secured-Barrier Packaging",
      description: "Advanced Alu-Alu and high-barrier blister packaging to secure formulation stability.",
      icon: (
        <svg className="w-7 h-7 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" className="stroke-teal/40" />
          <circle cx="7" cy="7" r="2" className="stroke-teal/80 fill-teal/5" />
          <circle cx="17" cy="7" r="2" className="stroke-teal/80 fill-teal/5" />
          <circle cx="7" cy="17" r="2" className="stroke-teal/80 fill-teal/5" />
          <circle cx="17" cy="17" r="2" className="stroke-teal/80 fill-teal/5" />
          <path d="M3 12h18M12 3v18" strokeDasharray="2 2" className="stroke-slate-300" />
        </svg>
      )
    },
    {
      label: "SC-LOGIS",
      title: "Clinical Logistics Pathways",
      description: "Established cold-chain logistics and secure custom clearance channels globally.",
      icon: (
        <svg className="w-7 h-7 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" className="fill-teal animate-pulse" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3" className="stroke-slate-400" />
          <path d="M5.5 5.5l2 2M16.5 16.5l2 2M5.5 16.5l2-2M16.5 7.5l2-2" className="stroke-indigo-500/40" />
          <circle cx="20" cy="4" r="1.5" className="fill-green" />
          <circle cx="4" cy="20" r="1.5" className="fill-indigo-500" />
        </svg>
      )
    },
    {
      label: "LEAD-TIME",
      title: "Optimized Cycle Lead Times",
      description: "Agile scheduling sprints with robust critical path allocation.",
      icon: (
        <svg className="w-7 h-7 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" className="stroke-teal/30" />
          <path d="M12 6v6l4 2" strokeLinecap="round" className="stroke-teal" />
          <path d="M12 3a9 9 0 0 1 9 9" className="stroke-green" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      label: "LIMS-QA",
      title: "Validated LIMS Laboratories",
      description: "HPLC, GC, and chemical assays integrated with real-time audit logs.",
      icon: (
        <svg className="w-7 h-7 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" className="stroke-teal/40" />
          <path d="M5 17l3-6 4 7 3-12 4 11" strokeLinejoin="round" className="stroke-teal" />
          <path d="M3 17h18" className="stroke-slate-300" strokeDasharray="1 2" />
        </svg>
      )
    },
  ];

  return (
    <section className="py-24 bg-[#f8fafc] relative overflow-hidden border-t border-slate-200/50">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-xs font-bold text-teal mb-4 tracking-widest uppercase">
            // CDMO_CAPABILITIES_MANIFEST
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Your Trusted Manufacturing Partner
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Blending world-class CDMO capacity, clinical regulatory alignment, and rigorous quality frameworks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-8 bg-white border border-slate-100 rounded-2xl hover:border-teal/30 hover:shadow-[0_10px_35px_rgba(13,148,136,0.06)] transition-all duration-300 group relative overflow-hidden"
              >
                {/* Technical Corner Ticks */}
                <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t border-r border-slate-200 group-hover:border-teal/40 rounded-tr-2xl transition-colors" />
                <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b border-l border-slate-200 group-hover:border-teal/40 rounded-bl-2xl transition-colors" />

                {/* Technical Label */}
                <span className="absolute top-3 right-4 font-mono text-[9px] text-slate-400 group-hover:text-teal/75 transition-colors">
                  [{feature.label}]
                </span>

                <div className="w-14 h-14 bg-slate-50 border border-slate-200/50 group-hover:border-teal/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 group-hover:text-slate-600 transition-colors text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
