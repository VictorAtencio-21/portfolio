"use client";
import ScrollBar from "@/components/layout/ScrollBar";
import Section from "@/components/custom/Section";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Main from "@/components/sections/Main";
import Stack from "@/components/sections/Stack/Stack";
import { SectionContext, useSectionContextValues } from "@/lib/SectionContext";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Home() {
  const { values } = useSectionContextValues();

  const t = useTranslations("navigation");

  const sections = [
    { title: t("main"), positionId: 0, Component: Main, hideTitle: true },
    { title: t("about"), positionId: 1, Component: About },
    { title: t("stack"), positionId: 2, Component: Stack },
    { title: t("experience"), positionId: 3, Component: Experience },
    { title: t("contact"), positionId: 4, Component: Contact, hideTitle: true },
  ];

  useEffect(() => {
    let throttled = false;

    const onWheel = (e: WheelEvent) => {
      if (throttled) return;
      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIndex = Math.min(
        sections.length - 1,
        Math.max(0, values.activeSection + direction)
      );

      const el = document.getElementById(`section-${nextIndex}`);
      if (el) {
        throttled = true;
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          throttled = false;
        }, 700);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [values.activeSection, sections.length]);

  return (
    <SectionContext.Provider value={values}>
      <ScrollBar sections={sections} />

      {/* ► Only THIS element owns the scroll bar */}
      <main className="h-screen">
        {sections.map(({ Component, ...sec }, i) => (
          <Section
            key={sec.positionId}
            section={sec}
            isFirst={i === 0}
            isLast={i === sections.length - 1}
          >
            <Component />
          </Section>
        ))}
      </main>
    </SectionContext.Provider>
  );
}
