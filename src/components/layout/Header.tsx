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
          <div className="flex items-center justify-between p-4 sm:p-2 lg:p-4">
            <Link
              href="/"
              className="text-2xl font-bold text-white hover:text-white transition-colors"
            >
              Victor Atencio
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-neutral-800/50 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu size={48} color="#fff" className="h-12 w-12"/>
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
