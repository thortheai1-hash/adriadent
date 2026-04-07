"use client";

import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const t = useTranslations("FAQ");
  
  // Since we have an array of FAQs, Next-intl uses keys 0,1,2,3 for array inputs.
  const faqIndices = [0, 1, 2, 3];
  
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-secondary/50 dark:bg-slate-950/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mx-auto mb-16">
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

        <div className="space-y-4">
          {faqIndices.map((i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-border transition-colors hover:border-primary/50"
              >
                <button
                  onClick={() => toggleAccordion(i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-lg font-bold text-foreground pr-8">
                    {t(`questions.${i}.q`)}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"
                  >
                    <ChevronDown className="w-5 h-5 text-primary" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 text-muted-foreground leading-relaxed border-t border-border/50">
                        {t(`questions.${i}.a`)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
