"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function Footer() {
  const t = useTranslations("Footer");
  
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-tight text-primary">
            ADRIA <span className="text-white">DENT</span>
          </span>
        </div>
        
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Adria Dent. {t("allRightsReserved")}
        </p>

        <p className="text-slate-600 text-sm flex gap-1 items-center">
          {t("developedBy")} <span className="text-red-500">❤️</span>
        </p>
      </div>
    </footer>
  );
}
