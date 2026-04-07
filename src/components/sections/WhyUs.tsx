"use client";

import { useTranslations } from "next-intl";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import React, { useRef } from "react";

function TiltCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative flex flex-col p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-xl will-change-transform"
    >
      <div
        style={{ transform: "translateZ(50px)" }}
        className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6"
      >
        {icon}
      </div>
      <h3
        style={{ transform: "translateZ(30px)" }}
        className="text-2xl font-serif font-bold text-foreground mb-4"
      >
        {title}
      </h3>
      <p
        style={{ transform: "translateZ(20px)" }}
        className="text-muted-foreground leading-relaxed"
      >
        {description}
      </p>
    </motion.div>
  );
}

export function WhyUs() {
  const t = useTranslations("WhyUs");

  return (
    <section id="why-us" className="py-24 bg-slate-50 dark:bg-slate-950 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ perspective: "1500px" }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <TiltCard
              title={t("items.painless.title")}
              description={t("items.painless.description")}
              icon={<ShieldCheck className="w-8 h-8" />}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TiltCard
              title={t("items.hygiene.title")}
              description={t("items.hygiene.description")}
              icon={<Sparkles className="w-8 h-8" />}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TiltCard
              title={t("items.expertise.title")}
              description={t("items.expertise.description")}
              icon={<Stethoscope className="w-8 h-8" />}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
