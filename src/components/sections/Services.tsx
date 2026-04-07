"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Sparkles, Syringe, Crown, Baby } from "lucide-react";

export function Services() {
  const t = useTranslations("Services");

  const services = [
    {
      id: "implants",
      icon: <Syringe className="w-8 h-8 text-primary" />,
    },
    {
      id: "cosmetic",
      icon: <Sparkles className="w-8 h-8 text-primary" />,
    },
    {
      id: "orthodontics",
      icon: <Crown className="w-8 h-8 text-primary" />,
    },
    {
      id: "pediatric",
      icon: <Baby className="w-8 h-8 text-primary" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-secondary/50 dark:bg-secondary/20 border border-border/50 rounded-2xl p-8 hover:shadow-xl hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-serif">
                {t(`items.${service.id}.title`)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(`items.${service.id}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
