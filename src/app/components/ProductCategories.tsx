import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProductCategories() {
  const categories = [
    {
      label: "DOSAGE-TAB",
      title: "Tablets",
      description: "Enteric-coated, sustained-release, and dispersible solid oral formulations optimized for targeted GI absorption.",
      image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      icon: (
        <svg className="w-6 h-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="8" className="stroke-teal/80 fill-teal/5" />
          <line x1="8" y1="12" x2="16" y2="12" className="stroke-teal" />
          <path d="M12 4v16" strokeDasharray="1 3" className="stroke-teal/40" />
        </svg>
      )
    },
    {
      label: "DOSAGE-CAP",
      title: "Capsules",
      description: "Liquid-filled softgels and hard gelatin capsules enclosing micro-pellets for controlled bio-delivery.",
      image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      icon: (
        <svg className="w-6 h-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="5" y="5" width="14" height="14" rx="7" className="stroke-teal/85" />
          <line x1="5" y1="12" x2="19" y2="12" className="stroke-teal/60" />
          <circle cx="9" cy="8.5" r="1" className="fill-teal" />
          <circle cx="15" cy="15.5" r="1.5" className="fill-indigo-500 animate-pulse" />
        </svg>
      )
    },
    {
      label: "DOSAGE-LIQ",
      title: "Specialized Liquids",
      description: "High-bioavailability oral suspensions, non-crystallizing syrups, and liposomal liquid mixtures.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      icon: (
        <svg className="w-6 h-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10 2h4M12 2v4M8 6h8v12a4 4 0 01-4 4H12a4 4 0 01-4-4V6z" className="stroke-teal/80" />
          <path d="M9 14h6" className="stroke-teal/40" />
          <circle cx="12" cy="11" r="1.5" className="fill-indigo-500 animate-pulse" />
        </svg>
      )
    },
    {
      label: "DOSAGE-STER",
      title: "Sterile Injectables",
      description: "Lyophilized powders, sterile vials, and ampoules manufactured under strict ISO Class 5 containment.",
      image: "https://images.unsplash.com/photo-1579165466991-467135ad3110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      icon: (
        <svg className="w-6 h-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 18L18 6M17 5l2 2M19 9l-2-2M15 13H11v-4" className="stroke-teal" />
          <path d="M5 19l-2 2" strokeLinecap="round" className="stroke-indigo-500" />
          <rect x="9" y="9" width="4" height="4" className="stroke-teal/30" />
        </svg>
      )
    },
  ];

  const futureCategories = [
    {
      title: "Allopathic",
      icon: (
        <svg className="w-5 h-5 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="6" width="16" height="12" rx="2" className="stroke-teal/80" />
          <path d="M12 9v6M9 12h6" className="stroke-teal" />
        </svg>
      )
    },
    {
      title: "Phytomedicines",
      icon: (
        <svg className="w-5 h-5 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22C12 22 20 18 20 12V4L12 2L4 4v8c0 6 8 10 8 10z" className="stroke-teal/50" />
          <path d="M9 12a3 3 0 0 1 6 0" className="stroke-green" />
        </svg>
      )
    },
    {
      title: "Nutraceuticals",
      icon: (
        <svg className="w-5 h-5 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="8" className="stroke-teal/80" />
          <path d="M8 12h8" className="stroke-indigo-500" />
        </svg>
      )
    },
  ];

  return (
    <section id="products" className="py-24 bg-[#f8fafc] relative overflow-hidden border-t border-slate-200/50">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-teal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-xs font-bold text-teal mb-4 tracking-widest uppercase">
            // CDMO_PRODUCT_PORTFOLIO
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Comprehensive Product Range
          </h2>
          <p className="text-xl text-slate-655 max-w-3xl mx-auto">
            Manufacturing excellence across multiple certified pharmaceutical dosage configurations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white border border-slate-100 hover:shadow-[0_10px_35px_rgba(13,148,136,0.06)] transition-all duration-300"
              >
                {/* Technical Ticks */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-slate-200 group-hover:border-teal/40 rounded-tr-2xl z-20 transition-colors" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-slate-200 group-hover:border-teal/40 rounded-bl-2xl z-20 transition-colors" />

                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm border border-slate-100 rounded-xl flex items-center justify-center shadow-sm">
                    {category.icon}
                  </div>
                  <span className="absolute bottom-3 left-4 font-mono text-[9px] text-white/85">
                    [{category.label}]
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{category.title}</h3>
                  <p className="text-slate-550 group-hover:text-slate-655 transition-colors text-sm leading-relaxed">{category.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-teal/5 via-indigo-500/5 to-green/5 border border-slate-200/80 rounded-2xl p-8 md:p-12 text-slate-900 text-center relative overflow-hidden group hover:border-teal/30 transition-all duration-500"
        >
          {/* Micro Telemetry */}
          <div className="absolute top-4 left-6 font-mono text-[9px] text-slate-400">
            [ PIPELINE // FORMULATION_R_D ]
          </div>
          
          <h3 className="text-3xl font-black mb-4">Future-Ready Portfolio</h3>
          <p className="text-xl mb-8 text-slate-600">
            Expanding into advanced therapeutic molecular classes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {futureCategories.map((category, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200/60 backdrop-blur-sm rounded-xl shadow-sm relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-in-out cursor-pointer"
                >
                  {category.icon}
                  <span className="font-semibold text-slate-800 text-sm">{category.title}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
