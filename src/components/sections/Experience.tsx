"use client";
import React from "react";

const experienceData = [
  {
    role: "Senior Software Developer",
    company: "Bigwise",
    location: "Maracaibo, Venezuela",
    period: "Nov 2023 – Present",
  },
  {
    role: "Full Stack Developer",
    company: "Devtop",
    location: "Maracaibo, Venezuela",
    period: "Apr 2023 – Nov 2023",
  },
  {
    role: "Full Stack Developer",
    company: "CreaApps",
    location: "Remote (Dominican Republic)",
    period: "Aug 2022 – May 2023",
  },
  {
    role: "Full Stack Developer",
    company: "Binwus",
    location: "Maracaibo, Venezuela",
    period: "May 2022 – Mar 2023",
  },
];

const Experience = () => {
  return (
    <div className="max-w-7xl flex flex-col items-center justify-center w-full mt-50">
      {/* Section Title */}
      <section className="w-full mx-auto">
        <h1 className="text-2xl text-white">My Experience</h1>
      </section>

      {/* Structured Layout Like Stack Section */}
      <section className="w-full mx-auto flex flex-col space-y-4">
        <div className="py-4 grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
          <h2 className="text-white text-5xl font-semibold mb-2 col-span-1">
            EXPERIENCE
          </h2>
          <div className="w-full flex flex-col gap-8 sm:col-span-2">
            {experienceData.map((exp) => (
              <div
                key={exp.company + exp.role}
                className="w-full p-6 rounded-xl backdrop-blur-lg hover:scale-[1.02] transition-transform duration-300"
              >
                <h2 className="text-3xl text-white font-bold">{exp.role}</h2>
                <p className="text-xl text-gray-300 font-medium mt-1">
                  {exp.company}
                </p>
                <p className="text-md text-gray-400 italic">{exp.location}</p>
                <p className="text-sm text-gray-400 mt-1">{exp.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
