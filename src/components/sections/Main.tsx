import Image from "next/image";
import React from "react";

const Main = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center max-w-7xl">
      <h1 className="text-2xl sm:text-5xl font-bold tracking-[-.01em] text-start sm:text-left">
        Hi there, I’m Victor{" "}
        <span className="waving-hand">
          <Image
            src="/waving-hand.svg"
            alt="Waving Hand"
            width={40}
            height={40}
            className="inline-block"
          />
        </span>
      </h1>

      <p className="text-lg sm:text-lg text-center">
        Passionate Full Stack Developer with a knack for crafting elegant
        solutions.
      </p>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Hire Me
        </a>
        <a
          className="rounded-full border border-solid border-foreground transition-colors flex items-center justify-center bg-white text-foreground gap-2 hover:bg-[#e2e2e2] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Main;
