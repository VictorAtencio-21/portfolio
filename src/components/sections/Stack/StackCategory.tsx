"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TechStackItem {
  name: string;
  icon: string;
  tint?: string;
}

interface StackCategoryProps {
  category: string;
  items: TechStackItem[];
}

const container = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const StackCategory: React.FC<StackCategoryProps> = ({ category, items }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
      className="py-4 grid grid-cols-1 sm:grid-cols-3"
    >
      <h2 className="text-white text-3xl sm:text-5xl font-semibold pb-8">
        {category.toUpperCase()}
      </h2>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 col-span-2">
        {items.map((itemData) => (
          <motion.div
            key={itemData.name}
            variants={item}
            className="w-full flex items-center gap-4 justify-start"
          >
            <Image
              src={itemData.icon}
              alt={itemData.name}
              width={48}
              height={48}
              className={cn("object-contain", {
                "filter invert": itemData.tint === "#FFFFFF",
              })}
            />
            <span className="text-white text-xl sm:text-3xl">
              {itemData.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default StackCategory;
