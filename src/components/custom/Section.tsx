import { SectionContext } from "@/lib/SectionContext";
import React, { HTMLAttributes, useContext, useRef } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";

export type Section = {
  positionId: number;
  title: string;
};

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  section: Section;
  isFirst?: boolean;
  isLast?: boolean;
}

const Section: React.FC<SectionProps> = ({
  section,
  isFirst = false,
  isLast = false,
  children,
  ...props
}) => {
  const sectionConxtext = useContext(SectionContext);
  if (sectionConxtext === null) return;

  const { setActiveSectionProgress, setActiveSection } = sectionConxtext;

  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: isFirst
      ? ["start start", "end center"]
      : isLast
      ? ["start center", "end end"]
      : ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0 && latest < 1) {
      setActiveSection(section.positionId);
      setActiveSectionProgress(latest);
    }
  });

  return (
    <section
      {...props}
      ref={container}
      className="max-w-7xl w-full flex items-center justify-center snap-start px-4"
      id={section.title}
    >
      <div className="w-full max-w-7xl flex flex-col gap-2 items-center justify-center">
        <section className="w-full mx-auto">
          <h1 className="text-2xl text-neutral-400">
            {section.title.toUpperCase()}
          </h1>
        </section>
        {children}
      </div>
    </section>
  );
};

export default Section;
