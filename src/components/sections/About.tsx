"use client";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <div className="w-full max-w-7xl flex flex-col items-center justify-center">
      <section className="w-full py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Intro Card */}
        <div className="rounded-lg">
          <h2 className="text-white text-xl font-semibold mb-2">
            {t("intro.title")}
          </h2>
          <p className="text-zinc-400">{t("intro.description")}</p>
        </div>
        {/* Passion Card */}
        <div className="rounded-lg">
          <h2 className="text-white text-xl font-semibold mb-2">
            {t("passion.title")}
          </h2>
          <p className="text-zinc-400">{t("passion.description")}</p>
        </div>
        {/* Location Card */}
        <div className="rounded-lg flex flex-col justify-between">
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">
              {t("location.title")}
            </h2>
            <p className="text-zinc-400 mb-4">{t("location.description")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
