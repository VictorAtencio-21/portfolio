import React from "react";

const Stack = () => {
  return (
    <div className="max-w-7xl flex flex-col items-center justify-center">
      {/* Title Section */}
      <section className="w-full mx-auto">
        <h1 className="text-5xl font-bold text-white">Tech Stack</h1>
      </section>

      <section className="w-full mx-auto py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        Stack Frontend React Next.js React Native Angular Jetpack Compose
        Material UI ShadCN UI Backend Node.js C# Express Firebase Prisma ORM
        WebSockets Tools & Other Tech Git & GitHub PostgreSQL MongoDB Figma (for
        UI collaboration) Web3 / Ethers (Polygon network) Windows Server
        Automation
      </section>
    </div>
  );
};

export default Stack;
