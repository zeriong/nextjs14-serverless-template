import React from "react";
import MainAside from "@/app/(main)/_components/layout/MainAside";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full">
      {/* main */}
      <main className="pl-aside-width">{children}</main>

      {/* aside */}
      <MainAside />
    </div>
  );
}
