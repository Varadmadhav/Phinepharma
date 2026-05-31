import { motion } from "motion/react";
import { Pill, Droplet, Syringe, Leaf, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProductCategories() {
  const categories = [
    {
      icon: Pill,
      title: "Tablets",
      description: "Wide range of therapeutic tablets in various strengths",
      image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
  {
  icon: Pill,
  title: "Capsules",
  description: "Hard and soft gelatin capsules for diverse formulations",
  image: "...",
},
    {
      icon: Droplet,
      title: "Syrups",
      description: "Liquid formulations with enhanced bioavailability",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      icon: Syringe,
      title: "Injectables",
      description: "Sterile injectable solutions and suspensions",
      image: "https://images.unsplash.com/photo-1579165466991-467135ad3110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
  ];

  const futureCategories = [
    { icon: Pill, title: "Allopathic" },
    { icon: Leaf, title: "Herbal" },
    { icon: Sparkles, title: "Nutraceutical" },
  ];

  return (
    <section id="products" className="py-24 bg-[var(--gray-50)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm font-semibold text-[var(--teal)] mb-4 tracking-wider uppercase">
            Product Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--navy)] mb-6">
            Comprehensive Product Range
          </h2>
          <p className="text-xl text-[var(--gray-600)] max-w-3xl mx-auto">
            Manufacturing excellence across multiple pharmaceutical dosage forms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <Icon size={24} className="text-[var(--teal)]" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[var(--navy)] mb-2">{category.title}</h3>
                  <p className="text-[var(--gray-600)]">{category.description}</p>
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
          className="bg-gradient-to-r from-[var(--teal)] to-[var(--green)] rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Future-Ready Portfolio</h3>
          <p className="text-xl mb-8 opacity-90">
            Expanding into new therapeutic categories
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {futureCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg"
                >
                  <Icon size={24} />
                  <span className="font-semibold">{category.title}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
