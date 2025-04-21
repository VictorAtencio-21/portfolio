import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { MenuSlide, slide } from "@/lib/menuAnim";

const Navigation = ({
  onClose, // Function to close the menu when a link is clicked
}: {
  onClose: () => void;
}) => {
  // Side bar navigation menu
  const Links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Tech Stack", href: "#stack" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.div
      variants={MenuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      className="fixed top-0 right-0 z-50 w-80 h-screen bg-black/20 backdrop-blur-md text-white px-4"
    >
      <div className="flex flex-col items-start justify-center p-8 h-full">
        <div className="text-sm font-semibold text-neutral-400 border-b-2 border-gray-700 w-full">
          NAVIGATION
        </div>

        <nav className="flex flex-col items-start mt-8 space-y-8">
          {/* Map through the links array and create a link for each item */}
          {Links.map((link, index) => (
            <motion.div
              custom={index}
              key={index}
              variants={slide}
              animate="enter"
              exit="exit"
              initial="initial"
              onClick={onClose} // Close the menu when a link is clicked
            >
              <Link
                key={index}
                href={link.href}
                className="text-5xl text-gray-300 hover:text-white transition-colors font-light"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Navigation;
