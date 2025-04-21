"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Navigation from "./Navigation";
import { AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react"; // Importing the Menu icon from lucide-react

const Header = () => {
  // State to manage the side menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-end p-3">
            <Button
              variant="ghost"
              className="backdrop-blur-md hover:bg-neutral-800/50 transition-colors"
              size={"lg"}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu size={48} color="#fff" className="h-24 w-24"/>
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {isOpen && (
          <Navigation
            onClose={
              () => setIsOpen(false) // Close the menu when a link is clicked
            }
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
