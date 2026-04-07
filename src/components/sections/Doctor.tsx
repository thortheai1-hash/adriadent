"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useRef } from "react";

export function Doctor() {
  const t = useTranslations("Doctor");
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // We parse the array of credentials stored in JSON dictionary
  const credentials = ["credentials.0", "credentials.1", "credentials.2"];

  return (
    <section ref={ref} id="doctor" className="py-24 bg-white dark:bg-slate-900 border-b border-border/50">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Photo Column */}
          <div className="relative aspect-[3/4] md:aspect-[4/5] lg:aspect-auto lg:h-[800px] w-full max-w-md mx-auto lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl z-10"
            >
              <div className="absolute inset-0 bg-secondary/20 z-10 mix-blend-overlay" />
              <motion.div style={{ y: imgY }} className="absolute -inset-y-[10%] w-full h-[120%]">
                <Image
                  src="/images/doctor photo.JPG"
                  alt="Dr. Adriatik Suma"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </motion.div>
            
            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 50 }}
              whileInView={{ opacity: 1, x: -20, y: 20 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/20 dark:bg-accent/10 rounded-full blur-3xl -z-10"
            />
          </div>

          {/* Text Column */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="uppercase tracking-widest text-sm font-bold text-primary mb-2 block">
                {t("title")}
              </span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4">
                {t("name")}
              </h2>
              <p className="text-xl text-muted-foreground font-medium mb-8">
                {t("role")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-foreground/80 leading-relaxed mb-10">
                {t("bio")}
              </p>
            </motion.div>

            <div className="space-y-4">
              {credentials.map((cred, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-muted/50 rounded-2xl border border-border/50"
                >
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-bold text-foreground">
                    {t(cred as any)}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
