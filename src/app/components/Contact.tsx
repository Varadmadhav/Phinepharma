import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Building, Clock } from "lucide-react";
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
      icon: Mail,
      title: "Email",
      value: "info@phinepharma.com",
      link: "mailto:info@phinepharma.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 XXX XXX XXXX",
      link: "tel:+91XXXXXXXXXX",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Pharmaceutical Industrial Area, India",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[var(--navy)] to-[var(--gray-800)] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm font-semibold text-[var(--teal-light)] mb-4 tracking-wider uppercase">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Partner With PHINE PHARMA
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your pharmaceutical manufacturing journey? Contact us today for a consultation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--teal)] to-[var(--green)] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={24} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-300 mb-1">{info.title}</div>
                        <div className="font-semibold">{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-[var(--teal-light)]" />
                  <div>
                    <div className="font-semibold">Monday - Friday</div>
                    <div className="text-sm text-gray-300">9:00 AM - 6:00 PM IST</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Building size={20} className="text-[var(--teal-light)]" />
                  <div>
                    <div className="font-semibold">Saturday</div>
                    <div className="text-sm text-gray-300">9:00 AM - 1:00 PM IST</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--teal)]"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--teal)]"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--teal)]"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--teal)]"
                      placeholder="+91 XXX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--teal)] resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[var(--teal)] to-[var(--green)] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={20} />
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
          className="mt-16 text-center pt-12 border-t border-white/20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <img
              src="/src/imports/WhatsApp_Image_2026-05-31_at_5.11.04_PM.jpeg"
              alt="PHINE PHARMA"
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold">PHINE PHARMA LLP</span>
          </div>
          <p className="text-gray-300 mb-4">
            Quality Medicines. Trusted Manufacturing. Global Reach.
          </p>
          <p className="text-sm text-gray-400">
            © 2026 PHINE PHARMA LLP. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
