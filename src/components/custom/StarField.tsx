"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NUM_STARS = 100;

type Star = {
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
};

function generateStars(): Star[] {
  return new Array(NUM_STARS).fill(0).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
  }));
}

export default function StarField() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate stars only on the client after first render
    setStars(generateStars());
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-[-1]">
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white opacity-80"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            y: [-5, 5],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: star.duration,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
