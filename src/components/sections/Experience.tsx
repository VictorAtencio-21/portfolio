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
    <div className="max-w-7xl flex flex-col items-center justify-center w-full">
      {/* Structured Layout Like Stack Section */}
      <section className="w-full mx-auto flex flex-col space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
          <div className="w-full flex flex-col gap-8 sm:col-span-2">
            {experienceData.map((exp) => (
              <div
                key={exp.company + exp.role}
                className="w-full rounded-xl backdrop-blur-lg hover:scale-[1.02] transition-transform duration-300"
              >
                <p className="text-2xl text-gray-300 font-medium mt-1">
                  {exp.company}
                </p>
                <h2 className="text-5xl text-white font-bold">{exp.role}</h2>
                <p className="text-lg text-gray-400 mt-1">{exp.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
