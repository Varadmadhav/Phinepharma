import { motion } from "motion/react";

export function ManufacturingProcess() {
  const steps = [
    {
      label: "FEASIBILITY",
      title: "Formulation Feasibility",
      description: "Verify active ingredient solubility profiles and bio-availability goals.",
      icon: (
        <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          <circle cx="10" cy="10" r="3" className="stroke-teal/40" />
        </svg>
      )
    },
    {
      label: "SCOPING",
      title: "CDMO Scoping & SOW",
      description: "Define formulation batches, raw material yields, and Statement of Work parameters.",
      icon: (
        <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="16" rx="2" className="stroke-teal/50" />
          <path d="M7 8h10M7 12h10M7 16h6" strokeLinecap="round" />
        </svg>
      )
    },
    {
      label: "COMPLIANCE",
      title: "Regulatory Audit Check",
      description: "Perform raw ingredient compliance verification and pharmacopoeia alignments.",
      icon: (
        <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" className="stroke-green" />
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" className="stroke-teal/50" />
        </svg>
      )
    },
    {
      label: "PACK-DES",
      title: "Active Barrier Design",
      description: "Select foil densities, blister dimensions, and anti-counterfeiting print runs.",
      icon: (
        <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="2" className="stroke-teal/40" />
          <path d="M4 9h16M4 15h16M9 4v16M15 4v16" strokeDasharray="2 2" className="stroke-slate-200" />
          <circle cx="9.5" cy="9.5" r="2" className="fill-teal animate-pulse" />
        </svg>
      )
    },
    {
      label: "DOSSIER",
      title: "eCTD Dossier Synthesis",
      description: "Compile administrative and technical files in CTD/eCTD format for registration.",
      icon: (
        <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" />
        </svg>
      )
    },
    {
      label: "CDMO-RUN",
      title: "GMP Production Sprints",
      description: "Execute formulation synthesis within ISO Class 7 cleanrooms under continuous HVAC monitoring.",
      icon: (
        <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="4" className="stroke-teal/80" />
          <path d="M12 2v4M12 18v4M4 12h4M16 12h4" />
          <path d="M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8" className="stroke-indigo-500/50" />
        </svg>
      )
    },
    {
      label: "ANALYSIS",
      title: "HPLC Purity Controls",
      description: "Run automated liquid chromatography and spectrophotometry to verify concentration metrics.",
      icon: (
        <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" className="stroke-teal/40" />
          <path d="M6 18l3-8 4 6 3-12 2 6" className="stroke-teal" />
          <circle cx="16" cy="6" r="1" className="fill-indigo-500 animate-ping" />
        </svg>
      )
    },
    {
      label: "QA-RELEASE",
      title: "Stability Verification",
      description: "Perform final batch audits, certificate of analysis (COA) generation, and releases.",
      icon: (
        <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="stroke-teal/70" />
          <path d="M9 12l2 2 4-4" strokeLinecap="round" className="stroke-green" />
        </svg>
      )
    },
    {
      label: "TRANSIT",
      title: "Secured Clinical Transit",
      description: "Ship finished products in tracked temperature environments under custom clearance tags.",
      icon: (
        <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="8" width="18" height="12" rx="2" className="stroke-teal/50" />
          <path d="M3 12h18M7 8v12M17 8v12" className="stroke-slate-200" />
          <path d="M16 4l-4 4-4-4" className="stroke-teal" />
        </svg>
      )
    },
  ];

  return (
    <section className="py-24 bg-white text-slate-900 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-xs font-bold text-teal mb-4 tracking-widest uppercase">
            // CDMO_PRODUCTION_PIPELINE
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Streamlined Manufacturing Process
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A systematic, validated sequence ensuring complete compliance, tracking, and formulation potency.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-white hover:border-teal/30 hover:shadow-[0_10px_30px_rgba(13,148,136,0.06)] transition-all relative overflow-hidden group">
                    {/* Technical Ticks */}
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-slate-200 group-hover:border-teal/50 rounded-tr-2xl transition-colors" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-slate-200 group-hover:border-teal/50 rounded-bl-2xl transition-colors" />

                    <div className="w-16 h-16 bg-slate-100 group-hover:bg-teal/5 border border-slate-200/50 group-hover:border-teal/20 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-105 transition-all duration-300">
                      {step.icon}
                    </div>
                    <div className="text-center">
                      <div className="font-mono text-[10px] text-teal font-bold mb-2">
                        STEP {index + 1} // [{step.label}]
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
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
