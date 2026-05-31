import { motion } from "motion/react";
import { Calendar, ArrowRight, FileText, TrendingUp, Activity } from "lucide-react";

export function Insights() {
  const articles = [
    {
      category: "Regulatory Updates",
      icon: FileText,
      title: "WHO-GMP Guidelines: Latest Updates for 2026",
      excerpt: "Understanding the latest regulatory changes and their impact on pharmaceutical manufacturing processes.",
      date: "May 28, 2026",
      readTime: "5 min read",
    },
    {
      category: "Manufacturing Insights",
      icon: TrendingUp,
      title: "Scaling Third-Party Manufacturing Operations",
      excerpt: "Key strategies for building efficient and compliant pharmaceutical manufacturing partnerships.",
      date: "May 25, 2026",
      readTime: "7 min read",
    },
    {
      category: "Healthcare Trends",
      icon: Activity,
      title: "Affordable Generic Medicines: Global Impact",
      excerpt: "How generic pharmaceutical manufacturing is making healthcare accessible to millions worldwide.",
      date: "May 20, 2026",
      readTime: "6 min read",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm font-semibold text-[var(--teal)] mb-4 tracking-wider uppercase">
            Insights & Knowledge
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--navy)] mb-6">
            Industry Insights & Updates
          </h2>
          <p className="text-xl text-[var(--gray-600)] max-w-3xl mx-auto">
            Stay informed with the latest pharmaceutical news, regulatory updates, and industry trends
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => {
            const Icon = article.icon;
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-[var(--gray-50)] rounded-2xl overflow-hidden hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[var(--teal)] to-[var(--green)] rounded-lg flex items-center justify-center">
                      <Icon size={20} className="text-white" />
                    </div>
                    <span className="text-sm font-semibold text-[var(--teal)]">
                      {article.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[var(--navy)] mb-3 group-hover:text-[var(--teal)] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-[var(--gray-600)] mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-[var(--gray-600)] mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{article.date}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>

                  <div className="flex items-center gap-2 text-[var(--teal)] font-semibold group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight size={20} />
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--navy)] text-white rounded-lg hover:bg-[var(--gray-800)] transition-colors"
          >
            View All Articles
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
