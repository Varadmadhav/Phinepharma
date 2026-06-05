import { motion } from "motion/react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      code: "MAIL_INBOUND",
      title: "Email Gateway",
      value: "info@phinepharma.com",
      link: "mailto:info@phinepharma.com",
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      code: "PHONELINE_CDMO",
      title: "Direct Phone Link",
      value: "+91 97699 94142",
      link: "tel:+919769994142",
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      code: "FACILITY_HQ",
      title: "Registered Facility HQ",
      value: "Phine Pharma LLP, Pharmaceutical Zone, India",
      link: "#",
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <circle cx="12" cy="11" r="3" />
        </svg>
      )
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden border-t border-slate-200/50">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-teal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-xs font-bold text-teal mb-4 tracking-widest uppercase">
            // CDMO_PARTNER_GATEWAY
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Partner With PHINE PHARMA
          </h2>
          <p className="text-xl text-slate-655 max-w-3xl mx-auto">
            Ready to scale your drug formulations? Request a batch quote or CDMO consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 mb-8 hover:bg-white hover:shadow-[0_10px_35px_rgba(13,148,136,0.06)] hover:border-teal/20 transition-all duration-300 relative overflow-hidden group">
              {/* Corner ticks */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-slate-200 group-hover:border-teal/40 rounded-tr-2xl transition-colors" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-slate-200 group-hover:border-teal/40 rounded-bl-2xl transition-colors" />
              
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Communication Gateways</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-start gap-4 hover:opacity-85 transition-opacity relative group/item"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-teal to-green rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                        {info.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-slate-500 font-semibold">{info.title}</span>
                          <span className="font-mono text-[8px] text-slate-400">[{info.code}]</span>
                        </div>
                        <div className="font-semibold text-slate-800 text-sm">{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:bg-white hover:shadow-[0_10px_35px_rgba(13,148,136,0.06)] hover:border-teal/20 transition-all duration-300 relative overflow-hidden group">
              {/* Corner ticks */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-slate-200 group-hover:border-teal/40 rounded-tr-2xl transition-colors" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-slate-200 group-hover:border-teal/40 rounded-bl-2xl transition-colors" />

              <h3 className="text-2xl font-bold text-slate-900 mb-6">Business Operations Hours</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-teal">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">Monday - Friday // Active Duty</div>
                    <div className="text-xs text-slate-500">9:00 AM - 6:00 PM IST [GMT+5:30]</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-teal">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M9 3v18M15 3v18M3 9h18" strokeDasharray="1 2" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">Saturday // Audit Verification Sprints</div>
                    <div className="text-xs text-slate-500">9:00 AM - 1:00 PM IST [GMT+5:30]</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-md shadow-slate-100/50 relative overflow-hidden group">
              {/* Corner ticks */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-slate-300 group-hover:border-teal/40 rounded-tr-2xl transition-colors" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-slate-300 group-hover:border-teal/40 rounded-bl-2xl transition-colors" />
              
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send CDMO Inquiry</h3>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                      Full Name *
                    </label>
                    <span className="font-mono text-[8px] text-slate-400">[ ENCODING: UTF-8 ]</span>
                  </div>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:bg-white rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-teal focus:border-teal/50 focus:shadow-[0_0_15px_rgba(13,148,136,0.08)] transition-all text-sm"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                      Email Address *
                    </label>
                    <span className="font-mono text-[8px] text-slate-400">[ MAIL_AUDIT ]</span>
                  </div>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:bg-white rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-teal focus:border-teal/50 focus:shadow-[0_0_15px_rgba(13,148,136,0.08)] transition-all text-sm"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:bg-white rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-teal focus:border-teal/50 focus:shadow-[0_0_15px_rgba(13,148,136,0.08)] transition-all text-sm"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:bg-white rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-teal focus:border-teal/50 focus:shadow-[0_0_15px_rgba(13,148,136,0.08)] transition-all text-sm"
                      placeholder="+91 99999 99999"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                      Message *
                    </label>
                    <span className="font-mono text-[8px] text-slate-400">[ REQ_SPECIFICATION_SOW ]</span>
                  </div>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:bg-white rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-teal focus:border-teal/50 focus:shadow-[0_0_15px_rgba(13,148,136,0.08)] transition-all resize-none text-sm"
                    placeholder="Tell us about your formulation requirements and batch scaling size..."
                  />
                </div>

                {/* Slide-shine Glare CTA Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-teal to-indigo-500 text-white font-semibold rounded-xl hover:shadow-[0_10px_35px_rgba(13,148,136,0.15)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 before:ease-in-out"
                >
                  Send Inquiry
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center pt-12 border-t border-slate-200/50"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <img
              src="/src/imports/WhatsApp_Image_2026-05-31_at_5.11.04_PM.jpeg"
              alt="PHINE PHARMA"
              className="h-10 w-auto rounded-lg border border-slate-200/50 shadow-sm"
            />
            <span className="text-2xl font-bold text-slate-900 font-sans tracking-wide">PHINE PHARMA LLP</span>
          </div>
          <p className="text-slate-600 mb-4 text-sm leading-relaxed">
            Quality Medicines. Aligned CDMO Manufacturing. Global Supply.
          </p>
          <p className="text-[10px] font-mono text-slate-400">
            © 2026 PHINE PHARMA LLP. [ CDMO REGISTRATION: ACTIVE ] // All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
