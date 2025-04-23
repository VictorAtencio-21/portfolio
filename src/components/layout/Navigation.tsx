import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { MenuSlide, slide } from "@/lib/menuAnim";
import { cn } from "@/lib/utils";

const Navigation = ({
  onClose, // Function to close the menu when a link is clicked
}: {
  onClose: () => void;
}) => {
  // Side bar navigation menu
  const Links = [
    { title: "", positionId: 0 },
    { title: "ABOUT ME", positionId: 1 },
    { title: "MY STACK", positionId: 2 },
    { title: "EXPERIENCE", positionId: 3 },
    { title: "CONTACT ME", positionId: 4 },
  ];

  return (
    <motion.div
      variants={MenuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      className="fixed top-0 right-0 z-50 w-80 h-screen bg-black/20 backdrop-blur-md text-white px-4"
    >
      {/* Close button */}
      <div className="flex items-center justify-end p-3">
        <button
          className="text-white text-2xl font-bold"
          onClick={onClose} // Close the menu when the button is clicked
        >
          &times;
        </button>
      </div>

      <div className="flex flex-col items-start justify-start p-6 h-full">
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
                key={link.positionId}
                href={`#section-${link.positionId}`}
                className={cn(
                  "text-4xl font-bold text-gray-400 hover:text-white transition-colors duration-300"
                )}
              >
                {link.title}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Navigation;
