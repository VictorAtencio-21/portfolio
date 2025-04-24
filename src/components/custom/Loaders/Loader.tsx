// components/Loader.tsx
"use client";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 5 }}
    >
      <motion.div
        className="text-white text-4xl font-bold"
        initial={{ y: 0 }}
        animate={{ y: -100 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      ></motion.div>
    </motion.div>
  );
}
