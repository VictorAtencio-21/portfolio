import React from "react";
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
}

const StackCategory: React.FC<StackCategoryProps> = ({ category, items }) => {
  return (
    <div className="py-4 grid grid-cols-1 sm:grid-cols-3">
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
    </div>
  );
};

export default StackCategory;
