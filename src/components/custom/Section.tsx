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
      className="max-w-7xl min-h-[70vh] w-full flex items-center justify-center snap-start px-4"
      id={section.title}
    >
      {children || (
        <div className="max-w-7xl flex flex-col items-center justify-center">
          <h1 className="text-2xl text-white">{section.title}</h1>
        </div>
      )}
    </section>
  );
};

export default Section;
