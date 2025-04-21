import { MailIcon, GlobeIcon } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
      {/* Title Section */}
      <section className="w-full mx-auto">
        <h1 className="text-5xl font-bold text-white">About Me</h1>
      </section>

      <section className="w-full mx-auto py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Intro Card */}
        <div className="p-6 rounded-2xl shadow-md bg-black/20 backdrop-blur-lg">
          <h2 className="text-white text-xl font-semibold mb-2">
            Let me introduce myself
          </h2>
          <p className="text-zinc-400">
            I’m a software developer from Maracaibo, Venezuela with over 4 years
            of experience building clean, user-friendly digital products. I love
            turning complex problems into simple, intuitive solutions that make
            people’s lives easier.
          </p>
        </div>
        {/* Passion Card (full width) */}
        <div className="p-6 rounded-2xl shadow-md bg-black/20 backdrop-blur-lg">
          <h2 className="text-white text-xl font-semibold mb-2">
            My Passion for Coding
          </h2>
          <p className="text-zinc-400">
            I genuinely enjoy what I do. Coding isn’t just my job—it’s my
            favorite way to learn, create, and solve real problems. I’m
            constantly exploring new tech, pushing my limits, and building
            things that matter. I’m always on the lookout for new challenges and
            opportunities to grow.
          </p>
        </div>

        {/* Location Card */}
        <div className="p-6 rounded-2xl shadow-md flex flex-col justify-between bg-black/20 backdrop-blur-lg">
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">
              Remote & Flexible
            </h2>
            <p className="text-zinc-400 mb-4">
              I’m based in Maracaibo, Venezuela and open to remote opportunities
              worldwide. Time zones aren’t a blocker—just a fun puzzle.
            </p>
          </div>
          <a
            href="mailto:atenciomvictor@gmail.com"
            className="bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg text-center hover:bg-green-500 transition"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}
