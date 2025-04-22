"use client";
import ScrollBar from "@/components/custom/ScrollBar";
import Section from "@/components/custom/Section";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Main from "@/components/sections/Main";
import Stack from "@/components/sections/Stack";
import { SectionContext, useSectionContextValues } from "@/lib/SectionContext";

export default function Home() {
  const { values } = useSectionContextValues();

  const sections = [
    { title: "", positionId: 0 },
    { title: "ABOUT ME", positionId: 1 },
    { title: "MY STACK", positionId: 2 },
    { title: "MY EXPERIENCE", positionId: 3 },
    { title: "CONTACT", positionId: 4 },
  ];

  return (
    <SectionContext.Provider value={values}>
      <ScrollBar sections={sections} />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-24 row-start-2 items-center h-screen w-full">
          <Section section={sections[0]} isFirst>
            <Main />
          </Section>
          <Section section={sections[1]}>
            <About />
          </Section>
          <Section section={sections[2]}>
            <Stack />
          </Section>
          <Section section={sections[3]} isLast>
            <Experience />
          </Section>
          <Section section={sections[4]} isLast>
            <Contact />
          </Section>
        </main>
      </div>
    </SectionContext.Provider>
  );
}
