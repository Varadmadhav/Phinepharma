import { motion } from "motion/react";

export function Insights() {
  const articles = [
    {
      code: "BULLETIN_REG_2026",
      category: "Regulatory Updates",
      title: "WHO-GMP Guidelines: Validation Standards for 2026",
      excerpt: "Analyzing the updated batch trace auditing and environmental controls required under the latest international compliance frameworks.",
      date: "May 28, 2026",
      readTime: "5 min read",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      code: "WHITE-PAPER_CDMO_03",
      category: "CDMO Operations",
      title: "Optimizing Yield in Third-Party Solid Formulations",
      excerpt: "Technical methods for improving dissolution profiles and tableting run speeds through micro-excipient ratio control.",
      date: "May 25, 2026",
      readTime: "7 min read",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 18h16M4 18l5-5 4 4 8-10" />
          <circle cx="21" cy="7" r="1.5" className="fill-current" />
        </svg>
      )
    },
    {
      code: "REPORT_LOGIS_GLOBAL",
      category: "Supply Chain Metrics",
      title: "Cold-Chain Integrity Pathways across Global Ports",
      excerpt: "Evaluating thermal validation technologies and automated customs declarations to secure shelf-life preservation during transit.",
      date: "May 20, 2026",
      readTime: "6 min read",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 4v16M4 12h16" className="opacity-50" />
          <circle cx="12" cy="12" r="2" className="fill-current" />
        </svg>
      )
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-xs font-bold text-teal mb-4 tracking-widest uppercase">
            // CDMO_INTEL_BULLETINS
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Industry Insights & Updates
          </h2>
          <p className="text-xl text-slate-655 max-w-3xl mx-auto">
            Stay informed with the latest pharmaceutical whitepapers, regulatory updates, and CDMO analysis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => {
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-[0_10px_35px_rgba(13,148,136,0.06)] hover:border-teal/20 transition-all duration-300 cursor-pointer relative"
              >
                {/* Tech Ticks */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-slate-200 group-hover:border-teal/40 rounded-tr-2xl transition-colors" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-slate-200 group-hover:border-teal/40 rounded-bl-2xl transition-colors" />

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal to-green rounded-lg flex items-center justify-center shadow-sm">
                        {article.icon}
                      </div>
                      <span className="text-sm font-semibold text-teal">
                        {article.category}
                      </span>
                    </div>
                    <span className="font-mono text-[8px] text-slate-400">
                      [{article.code}]
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-slate-500 group-hover:text-slate-605 transition-colors mb-6 line-clamp-3 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-slate-500 mb-6 font-mono">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{article.date}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>

                  <div className="flex items-center gap-2 text-teal font-semibold group-hover:gap-3 transition-all duration-300 text-sm">
                    Read Report
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-in-out border border-slate-200/50"
          >
            View All Reports
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
