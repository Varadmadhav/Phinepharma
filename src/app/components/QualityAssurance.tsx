import { motion } from "motion/react";

export function QualityAssurance() {
  const qualityFeatures = [
    {
      label: "GMP-STAND",
      title: "GMP System Standards",
      description: "Validated WHO-GMP compliance checklists for every manufacturing stage.",
      icon: (
        <svg className="w-7 h-7 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="8" className="stroke-teal/40" />
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" className="stroke-green" />
        </svg>
      )
    },
    {
      label: "LAB-TEST",
      title: "Chromatography Assays",
      description: "Validated HPLC and gas chromatography purity testing of active ingredients.",
      icon: (
        <svg className="w-7 h-7 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="2" className="stroke-teal/40" />
          <path d="M6 16l3-6 4 7 3-12 2 6" className="stroke-teal" />
        </svg>
      )
    },
    {
      label: "BATCH-REC",
      title: "Batch Record Auditing",
      description: "Rigorous maintenance of batch manufacturing records for full retrospective tracing.",
      icon: (
        <svg className="w-7 h-7 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 19V5a2 2 0 012-2h10l4 4v12a2 2 0 01-2 2H6a2 2 0 01-2-2z" />
          <path d="M14 3v4h4M8 12h8M8 16h6" strokeLinecap="round" className="stroke-teal/50" />
        </svg>
      )
    },
    {
      label: "SOP-COMP",
      title: "SOP Quality Containment",
      description: "Meticulous standard operating procedures matching ISO 9001:2015 specifications.",
      icon: (
        <svg className="w-7 h-7 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="4" className="stroke-indigo-500 animate-pulse" />
          <circle cx="12" cy="12" r="9" className="stroke-teal/40" strokeDasharray="3 3" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2" className="stroke-slate-400" />
        </svg>
      )
    },
    {
      label: "INPROCESS-QC",
      title: "In-Process Quality Audits",
      description: "Real-time density, moisture-limit, and hardness testing directly on cleanroom lines.",
      icon: (
        <svg className="w-7 h-7 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="10" width="18" height="11" rx="2" className="stroke-teal/50" />
          <path d="M7 10V5a2 2 0 014 0v5M13 10V7a2 2 0 014 0v3" className="stroke-slate-400" />
        </svg>
      )
    },
    {
      label: "REG-CERT",
      title: "Regulatory Inspection Logs",
      description: "Continuous compliance logs matching criteria for global customs and import approvals.",
      icon: (
        <svg className="w-7 h-7 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="stroke-teal/65" />
          <circle cx="12" cy="11" r="3" className="stroke-indigo-500" />
        </svg>
      )
    },
  ];

  return (
    <section id="quality" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden border-t border-slate-200/50">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-teal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-xs font-bold text-teal mb-4 tracking-widest uppercase">
            // CDMO_QUALITY_SYSTEMS
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Uncompromising Quality Standards
          </h2>
          <p className="text-xl text-slate-655 max-w-3xl mx-auto">
            Ensuring absolute molecular safety, batch homogeneity, and formulation efficacy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {qualityFeatures.map((feature, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-8 bg-white border border-slate-100 rounded-2xl hover:border-teal/30 hover:shadow-[0_10px_35px_rgba(13,148,136,0.06)] transition-all duration-300 group relative overflow-hidden"
              >
                {/* Technical Ticks */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-slate-200 group-hover:border-teal/40 rounded-tr-2xl transition-colors" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-slate-200 group-hover:border-teal/40 rounded-bl-2xl transition-colors" />

                <span className="absolute top-3 right-4 font-mono text-[9px] text-slate-400 group-hover:text-teal/70 transition-colors">
                  [{feature.label}]
                </span>

                <div className="w-14 h-14 bg-slate-50 border border-slate-200/50 group-hover:border-teal/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 group-hover:text-slate-600 transition-colors text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-150 rounded-2xl p-12 text-center shadow-sm relative overflow-hidden group hover:border-teal/30 transition-all duration-500"
        >
          {/* Subtle grid ticks on box corners */}
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-slate-250 group-hover:border-teal/50 rounded-tr-2xl transition-colors" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-slate-250 group-hover:border-teal/50 rounded-bl-2xl transition-colors" />

          {/* Glowing validation seal SVG */}
          <div className="w-16 h-16 bg-teal/5 border border-teal/15 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-teal animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 11l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h3 className="text-3xl font-bold text-slate-900 mb-4">WHO-GMP Compliant Infrastructure</h3>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Our facilities are continuously engineered to comply with the rigorous requirements of the World Health Organization (WHO) and ISO audits, guaranteeing validation documentation and stability tracking across every shipment.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="px-6 py-3 bg-teal/5 border border-teal/15 rounded-xl font-mono text-xs font-semibold text-teal shadow-sm">
              [ CODE: WHO-GMP-2026 ]
            </div>
            <div className="px-6 py-3 bg-indigo-500/5 border border-indigo-500/15 rounded-xl font-mono text-xs font-semibold text-indigo-500 shadow-sm">
              [ CERT: ISO-9001-2015 ]
            </div>
            <div className="px-6 py-3 bg-green/5 border border-green/15 rounded-xl font-mono text-xs font-semibold text-green shadow-sm">
              [ AUDIT: ICH-STABILITY-Q1A ]
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
