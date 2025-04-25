import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TechStackItem {
  name: string;
  icon: string;
  tint?: string;
}

interface StackCategoryProps {
  category: string;
  items: TechStackItem[];
  delay: number;
  scrollDirection: "up" | "down";
}

const StackCategory: React.FC<StackCategoryProps> = ({
  category,
  items,
  delay,
  scrollDirection,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
        hidden: {
          opacity: 0,
          y: scrollDirection === "down" ? 100 : -100,
          transition: { duration: 0.6 },
        },
      }}
      className="py-4 grid grid-cols-1 sm:grid-cols-3"
    >
      <h2 className="text-white text-5xl font-semibold pb-8">
        {category.toUpperCase()}
      </h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 col-span-2">
        {items.map((item) => (
          <div
            key={item.name}
            className="w-full flex items-center gap-4 justify-start"
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={48}
              height={48}
              className={cn("object-contain", {
                "filter invert": item.tint === "#FFFFFF",
              })}
            />
            <span className="text-white text-3xl">{item.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default StackCategory;
