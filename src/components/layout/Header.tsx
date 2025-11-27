"use client";
import Link from "next/link";
import React, { useState } from "react";
import LanguageSwitcher from "../custom/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Header = () => {
  const t = useTranslations("navigation");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: t("main"), positionId: 0 },
    { label: t("about"), positionId: 1 },
    { label: t("stack"), positionId: 2 },
    { label: t("projects"), positionId: 3 },
    { label: t("experience"), positionId: 4 },
    { label: t("contact"), positionId: 5 },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-lg">
          <div className="flex items-center gap-3 md:gap-6">
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-gray-200 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:hidden"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <nav className="hidden flex-wrap items-center gap-3 text-sm md:flex md:gap-6" aria-label="Primary">
              {navLinks.map(({ label, positionId }) => (
                <Link
                  key={positionId}
                  href={`#section-${positionId}`}
                  className={cn(
                    "text-sm font-medium text-gray-300 transition-colors hover:text-white",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="mt-3 rounded-2xl border border-white/10 bg-black/50 p-4 shadow-2xl backdrop-blur-xl">
              <nav className="flex flex-col gap-3" aria-label="Primary mobile">
                {navLinks.map(({ label, positionId }) => (
                  <Link
                    key={positionId}
                    href={`#section-${positionId}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-2 text-base font-medium text-gray-100 transition hover:bg-white/10",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    )}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
              <div className="mt-4 flex items-center justify-between rounded-xl bg-white/5 p-3">
                <span className="text-sm text-gray-300">{t("language")}</span>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
