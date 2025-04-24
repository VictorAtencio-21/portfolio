import React, { useContext } from "react";
import { Section } from "./Section";
import { SectionContext } from "@/lib/SectionContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ScrollBarProps {
  sections: Section[];
}

const ScrollBar: React.FC<ScrollBarProps> = ({ sections }) => {
  const sectionContext = useContext(SectionContext);
  if (sectionContext === null) return null;

  const { activeSection, activeSectionProgress } = sectionContext;

  return (
    <motion.div className="fixed right-10 w-2 h-screen flex flex-col items-center justify-center z-10 gap-2">
      {sections.map(({ positionId }) => (
        <motion.div
          key={positionId}
          layoutId={`scrollbar-${positionId}`}
          layout
          transition={{
            duration: 0.5,
            type: "spring",
            bounce: 0.2,
          }}
          style={{
            borderRadius: 999,
          }}
          className={cn("w-2 h-2 overflow-hidden bg-slate-100", {
            "bg-[#60a5fa]": activeSection === positionId,
            "bg-slate-500": activeSection !== positionId,
            "h-[32px]": activeSection === positionId,
            "h-2": activeSection !== positionId,
          })}
        ></motion.div>
      ))}
    </motion.div>
  );
};

export default ScrollBar;
