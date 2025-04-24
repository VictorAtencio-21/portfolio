"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TechStackItem {
  name: string;
  icon: string;
  tint?: string; // Optional tint property for custom colors
}

interface TechStack {
  frontend: TechStackItem[];
  mobile: TechStackItem[];
  backend: TechStackItem[];
  tools: TechStackItem[];
}

// Define the tech stack data structure
const techStack: TechStack = {
  frontend: [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Angular",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    },
    {
      name: "Material UI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Framer Motion",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
      tint: "#FFFFFF", // Custom tint for Framer Motion icon, make it white
    },
    {
      name: "Three.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
      tint: "#FFFFFF", // Custom tint for Three.js icon, make it white
    },
  ],
  mobile: [
    {
      name: "React Native",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Jetpack Compose",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    },
    {
      name: "Ionic",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: ".NET",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      tint: "#FFFFFF", // Custom tint for Express.js icon, make it white
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "Prisma ORM",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    },
    {
      name: "Socket.IO",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
      tint: "#FFFFFF", // Custom tint for Socket.IO icon, make it white
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
  ],
} as const;

const Stack = () => {
  return (
    <div className="max-w-7xl flex flex-col items-start justify-center">
      <section className="w-full flex flex-col space-y-4">
        {Object.keys(techStack).map((category) => (
          <div key={category} className="py-4 grid grid-cols-1 sm:grid-cols-3">
            <h2 className="text-white text-5xl font-semibold pb-8">
              {category.toUpperCase()}
            </h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 col-span-2">
              {techStack[category as keyof TechStack].map(
                (item: TechStackItem) => (
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
                        "filter invert": item.tint === "#FFFFFF", // Apply white tint if specified
                      })}
                    />
                    <span className="text-white text-3xl">{item.name}</span>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Stack;
