"use client";
import { createContext, useState } from "react";

export type SectionContextType = {
  activeSection: number;
  setActiveSection: (section: number) => void;
  activeSectionProgress: number;
  setActiveSectionProgress: (progress: number) => void;
};

export const SectionContext = createContext<SectionContextType | null>(null);

export const useSectionContextValues = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [activeSectionProgress, setActiveSectionProgress] = useState(0);

  return {
    values: {
      activeSection,
      setActiveSection,
      activeSectionProgress,
      setActiveSectionProgress,
    },
  };
};
