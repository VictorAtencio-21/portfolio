import { SectionContext } from "@/lib/SectionContext";
import React, { HTMLAttributes, useContext, useRef } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";

export type Section = {
  positionId: number;
  title: string;
  hideTitle?: boolean;
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

  const { setActiveSectionProgress, setActiveSection } = sectionConxtext || {};

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
      setActiveSection?.(section.positionId);
      setActiveSectionProgress?.(latest);
    }
  });

  return (
    <section
      {...props}
      ref={container}
      /* exactly 100 vh, centres the content, snaps into place */
      className="min-h-screen md:h-screen w-full flex items-center justify-center snap-start px-4"
      id={`section-${section.positionId}`}
    >
      {/* your inner wrapper stays the same */}
      <div className="w-full max-w-7xl flex flex-col gap-2 items-center justify-center">
        {section.title && !section.hideTitle && (
          <h1 className="w-full text-2xl text-neutral-400">{section.title}</h1>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
