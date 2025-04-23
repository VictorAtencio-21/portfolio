"use client";

import React from "react";
import Link from "next/link";
import { Mail, Github, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="max-w-7xl flex flex-col items-center justify-center w-full py-16 px-4">
      <section className="w-full mx-auto flex flex-col space-y-12 text-center">
        <div className="w-full flex flex-col gap-6">
          <div className="w-full rounded-xl backdrop-blur-lg transition-transform duration-300">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-500 to-blue-900 text-transparent bg-clip-text">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
              Have a project in mind? Let's work together to bring your ideas to
              life!
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <Link
              href="mailto:atenciomvictor@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-700 hover:border-gray-500 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Me</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div className="flex justify-center gap-8 mt-16">
            <Link
              href="https://github.com/VictorAtencio-21"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/victor-atencio/"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://wa.me/+584146195291"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="sr-only">WhatsApp</span>
            </Link>
          </div>

          <div className="mt-8">
            <p className="text-gray-400">
              Feel free to reach out via email at{" "}
              <a
                href="mailto:atenciomvictor@gmail.com"
                className="text-blue-500 hover:underline"
              >
                atenciomvictor@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
