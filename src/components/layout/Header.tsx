"use client";
import Link from "next/link";
import React from "react";
import LanguageSwitcher from "../custom/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const Header = () => {
  const t = useTranslations("navigation");

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
          <nav className="flex flex-wrap items-center gap-3 text-sm md:gap-6" aria-label="Primary">
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
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
