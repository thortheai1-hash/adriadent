"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { motion } from "framer-motion";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "sq" : "en";
    router.replace({ pathname }, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center justify-between w-16 h-8 p-1 rounded-full bg-secondary text-secondary-foreground overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
      aria-label="Toggle language"
    >
      <span className="z-10 text-[10px] font-bold w-1/2 text-center uppercase">EN</span>
      <span className="z-10 text-[10px] font-bold w-1/2 text-center uppercase">AL</span>
      <motion.div
        className="absolute top-1 bottom-1 w-7 bg-primary rounded-full z-0 flex items-center justify-center text-[10px] font-bold text-white shadow-sm"
        initial={false}
        animate={{
          left: locale === "en" ? "4px" : "32px",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {locale === "en" ? "EN" : "AL"}
      </motion.div>
    </button>
  );
}
