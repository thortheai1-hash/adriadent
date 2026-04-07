"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";

export function Equipment() {
  const t = useTranslations("Equipment");

  // Premium equipment brands in modern dentistry
  const brands = [
    "Straumann",
    "Invisalign",
    "Dentsply Sirona",
    "KaVo",
    "3M Oral Care",
    "Ivoclar Vivadent",
    "Planmeca",
    "A-dec"
  ];

  // Duplicate for seamless infinite marquee loop
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-20 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4 text-white/80"
          >
            <Activity className="w-5 h-5" />
            <span className="uppercase tracking-widest text-sm font-bold">Premium Tools</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/80"
          >
            {t("subtitle")}
          </motion.p>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary to-transparent z-10" />
        
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap items-center py-4 group-hover:[animation-play-state:paused]"
        >
          {duplicatedBrands.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 transition-all hover:bg-white/20 hover:scale-105 cursor-default shadow-lg"
            >
              <h4 className="font-bold text-2xl tracking-wider text-white">
                {brand}
              </h4>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
