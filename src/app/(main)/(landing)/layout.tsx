import React from "react";

export default function MainLandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full">
      {/* main */}
      <main className="">{children}</main>
    </div>
  );
}
