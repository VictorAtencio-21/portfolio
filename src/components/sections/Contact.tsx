import React from "react";

const Contact = () => {
  return (
    <div className="max-w-7xl flex flex-col items-center justify-center w-full">
      <section className="w-full mx-auto flex flex-col space-y-4">
        <div className="w-full flex flex-col gap-8 sm:col-span-2">
          <div className="w-full rounded-xl backdrop-blur-lg hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-5xl text-white font-bold">
              Let's make it happen!
            </h2>
            <p className="text-lg text-gray-400 mt-1">
              Feel free to reach out to me via email at{" "}
              <a
                href="mailto:atenciomvictor@gmail.com"
                className="text-blue-500 hover:underline"
              >
                atenciomvictor@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
