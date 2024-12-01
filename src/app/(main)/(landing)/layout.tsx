import React from "react";
import MainHeader from "@/app/(main)/_components/layout/MainHeader";

export default function MainLandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full">
      {/* header */}
      <MainHeader />
      {/* main */}
      <main className="pt-header-height">{children}</main>
    </div>
  );
}
