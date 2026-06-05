import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ManufacturingExcellence() {
  const capabilities = [
    "ISO Class 7 & 8 Cleanroom certified zones",
    "Advanced QC & QA laboratories with HPLC and GC assays",
    "WHO-GMP validated high-yield solid & liquid lines",
    "Dossier-compliant documentation (ICH Stability aligned)",
    "HEPA-filtered HVAC air-handling environmental containment",
    "Scalable batch CDMO production configurations",
  ];

  const CheckIcon = () => (
    <svg className="w-5 h-5 text-teal flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <section id="manufacturing" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-green/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-xs font-bold text-teal mb-4 tracking-widest uppercase">
            // CDMO_FACILITY_SPECIFICATION
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            World-Class Manufacturing Facilities
          </h2>
          <p className="text-xl text-slate-650 max-w-3xl mx-auto">
            Advanced environment containment, automated assays, and compliance standard execution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Manufacturing Capabilities
              </h3>
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-lg text-slate-655">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl text-center hover:bg-white hover:border-teal/30 hover:shadow-[0_10px_30px_rgba(13,148,136,0.06)] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-slate-200 group-hover:border-teal/55 transition-colors" />
                <div className="text-4xl font-extrabold text-teal mb-2">10+</div>
                <div className="text-xs text-slate-500 font-semibold mb-1">Years Experience</div>
                <div className="font-mono text-[9px] text-slate-400">[ ESTD: 2016 ]</div>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl text-center hover:bg-white hover:border-teal/30 hover:shadow-[0_10px_30px_rgba(13,148,136,0.06)] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-slate-200 group-hover:border-teal/55 transition-colors" />
                <div className="text-4xl font-extrabold text-teal mb-2">500+</div>
                <div className="text-xs text-slate-500 font-semibold mb-1">Products</div>
                <div className="font-mono text-[9px] text-slate-400">[ DMF_LIBRARY ]</div>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl text-center hover:bg-white hover:border-teal/30 hover:shadow-[0_10px_30px_rgba(13,148,136,0.06)] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-slate-200 group-hover:border-teal/55 transition-colors" />
                <div className="text-4xl font-extrabold text-teal mb-2">50+</div>
                <div className="text-xs text-slate-500 font-semibold mb-1">Countries</div>
                <div className="font-mono text-[9px] text-slate-400">[ GLOBAL_EXPORTS ]</div>
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
              <div className="relative rounded-2xl overflow-hidden border border-slate-250/30 group">
                <div className="absolute inset-0 bg-teal/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                <div className="absolute top-2 left-2 bg-slate-900/70 backdrop-blur-sm px-2 py-1 rounded text-[9px] text-white font-mono z-10 border border-white/10">
                  [ FACILITY_A // STAGE_1 ]
                </div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581093577421-f561a654a353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Manufacturing facility"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-slate-250/30 group">
                <div className="absolute inset-0 bg-teal/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                <div className="absolute top-2 left-2 bg-slate-900/70 backdrop-blur-sm px-2 py-1 rounded text-[9px] text-white font-mono z-10 border border-white/10">
                  [ CLEANROOM // HPLC_AUDIT ]
                </div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Quality control"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative rounded-2xl overflow-hidden border border-slate-250/30 group">
                <div className="absolute inset-0 bg-teal/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                <div className="absolute top-2 left-2 bg-slate-900/70 backdrop-blur-sm px-2 py-1 rounded text-[9px] text-white font-mono z-10 border border-white/10">
                  [ BIO_CHEMICAL // R_D_LAB ]
                </div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Laboratory testing"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-slate-250/30 group">
                <div className="absolute inset-0 bg-teal/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                <div className="absolute top-2 left-2 bg-slate-900/70 backdrop-blur-sm px-2 py-1 rounded text-[9px] text-white font-mono z-10 border border-white/10">
                  [ AUTOMATED // PACKAGING ]
                </div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Production line"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
