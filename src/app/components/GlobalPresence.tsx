import { motion } from "motion/react";
import worldMapUrl from "../../imports/world_map_vector.png";

export function GlobalPresence() {
  const markets = [
    { name: "Asia Pacific", code: "REG_APAC" },
    { name: "Middle East", code: "REG_MIDEAST" },
    { name: "Africa", code: "REG_AFRICA" },
    { name: "Latin America", code: "REG_LATAM" },
    { name: "CIS Countries", code: "REG_CIS" },
    { name: "Southeast Asia", code: "REG_SEASIA" },
  ];

  const stats = [
    {
      value: "50+",
      label: "Export Countries",
      code: "LOC_COUNT",
      icon: (
        <svg className="w-7 h-7 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" className="stroke-teal/40" />
          <path d="M12 3v18M3 12h18" className="stroke-teal/60" />
          <circle cx="12" cy="12" r="3" className="fill-teal animate-pulse" />
        </svg>
      )
    },
    {
      value: "100+",
      label: "Distribution Partners",
      code: "PARTNERS_NET",
      icon: (
        <svg className="w-7 h-7 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="7" cy="7" r="3" className="stroke-teal/80" />
          <circle cx="17" cy="17" r="3" className="stroke-indigo-500" />
          <path d="M10 7h3a4 4 0 0 1 4 4v2" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      value: "40%",
      label: "Annual Growth",
      code: "KPI_GROWTH",
      icon: (
        <svg className="w-7 h-7 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 18l4-4 4 4 8-10" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="20" cy="8" r="1.5" className="fill-teal animate-ping" />
        </svg>
      )
    },
    {
      value: "500+",
      label: "Healthcare Systems",
      code: "END_PROVIDERS",
      icon: (
        <svg className="w-7 h-7 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="stroke-teal/40" />
          <circle cx="12" cy="11" r="2.5" className="fill-teal" />
        </svg>
      )
    },
  ];

  return (
    <section className="py-24 bg-[#f8fafc] relative overflow-hidden border-t border-slate-200/50">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-[50vw] h-[50vw] rounded-full bg-teal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-xs font-bold text-teal mb-4 tracking-widest uppercase">
            // CDMO_GLOBAL_LOGISTICS_HUB
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Serving Healthcare Worldwide
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our pharmaceutical products reach patients across the globe through a validated, secure supply chain network.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* High-Tech SVG Map Viewport */}
            <div className="relative aspect-video bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-inner group">
              {/* World Map Backdrop Image */}
              <img
                src={worldMapUrl}
                alt="World Map Grid"
                className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-screen pointer-events-none z-0"
              />

              {/* Corner Ticks on Map Viewport */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-teal/40 rounded-tr-xl z-20" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-teal/40 rounded-bl-xl z-20" />
              
              <div className="absolute top-2 left-3 font-mono text-[8px] text-white/45 tracking-wider z-10">
                [ VISUAL_MAP_GRID // SYSTEM_ALIGNED ]
              </div>

              <div className="absolute inset-0 opacity-15 pointer-events-none z-0">
                <div className="absolute top-10 left-10 w-64 h-64 bg-teal rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-green rounded-full blur-3xl" />
              </div>

              <div className="relative w-full h-full flex items-center justify-center z-10 p-4">
                <svg className="w-full h-full text-teal/20" viewBox="0 0 800 400" fill="none" stroke="currentColor" strokeWidth="1">
                  {/* Grid lines */}
                  <path d="M 0 50 L 800 50 M 0 100 L 800 100 M 0 150 L 800 150 M 0 200 L 800 200 M 0 250 L 800 250 M 0 300 L 800 300 M 0 350 L 800 350" strokeDasharray="3 9" className="opacity-40" />
                  <path d="M 100 0 L 100 400 M 200 0 L 200 400 M 300 0 L 300 400 M 400 0 L 400 400 M 500 0 L 500 400 M 600 0 L 600 400 M 700 0 L 700 400" strokeDasharray="3 9" className="opacity-40" />
                  
                  {/* Logistics lines */}
                  <path d="M 150 150 Q 300 80 450 180 T 700 100" stroke="url(#mapGrad)" strokeWidth="1.5" strokeDasharray="5 5" className="opacity-75" />
                  <path d="M 200 280 Q 400 200 600 320" stroke="url(#mapGrad2)" strokeWidth="1.5" className="opacity-60" strokeDasharray="4 8" />
                  
                  {/* Active Nodes */}
                  <circle cx="550" cy="160" r="4" className="fill-teal animate-ping" />
                  <circle cx="550" cy="160" r="2" className="fill-teal" />
                  <circle cx="550" cy="160" r="12" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="text-teal/40 animate-spin" />
                  
                  <circle cx="430" cy="180" r="4" className="fill-indigo-500 animate-ping" />
                  <circle cx="430" cy="180" r="2" className="fill-indigo-500" />
                  
                  <circle cx="380" cy="240" r="4" className="fill-green animate-ping" />
                  <circle cx="380" cy="240" r="2" className="fill-green" />

                  <circle cx="180" cy="280" r="4" className="fill-teal animate-ping" />
                  <circle cx="180" cy="280" r="2" className="fill-teal" />

                  <circle cx="480" cy="110" r="4" className="fill-indigo-500 animate-ping" />
                  <circle cx="480" cy="110" r="2" className="fill-indigo-500" />

                  {/* Telemetry Labels */}
                  <text x="565" y="163" className="fill-teal font-mono text-[9px] font-bold">NODE_APAC_01</text>
                  <text x="445" y="183" className="fill-indigo-500 font-mono text-[9px] font-bold">NODE_ME_03</text>
                  <text x="395" y="243" className="fill-green font-mono text-[9px] font-bold">NODE_AFR_07</text>
                  
                  <defs>
                    <linearGradient id="mapGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#0d9488" />
                      <stop offset="100%" stopColor="#4f46e5" />
                    </linearGradient>
                    <linearGradient id="mapGrad2" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#4f46e5" />
                      <stop offset="100%" stopColor="#22c55e" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-6 font-sans">
              International Export Markets
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We have established reliable distribution channels across key pharmaceutical markets worldwide, streamlining clearances and shipping configurations for high-purity product batches.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {markets.map((market, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:shadow-sm transition-shadow group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-slate-200 group-hover:border-teal/40 transition-colors" />
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-semibold text-slate-700 text-sm">{market.name}</span>
                  </div>
                  <span className="font-mono text-[9px] text-slate-400">[{market.code}]</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-8 bg-white border border-slate-100 rounded-2xl text-center hover:shadow-[0_10px_35px_rgba(13,148,136,0.06)] hover:border-teal/20 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Corner Ticks */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-slate-200 group-hover:border-teal/40 rounded-tr-2xl transition-colors" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-slate-200 group-hover:border-teal/40 rounded-bl-2xl transition-colors" />
                
                <span className="absolute top-2 right-3 font-mono text-[8px] text-slate-400 group-hover:text-teal/70">
                  [{stat.code}]
                </span>

                <div className="w-14 h-14 bg-slate-50 border border-slate-200/50 group-hover:border-teal/20 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-105 transition-all duration-300 shadow-sm">
                  {stat.icon}
                </div>
                <div className="text-4xl font-extrabold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-500 font-semibold text-xs">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
