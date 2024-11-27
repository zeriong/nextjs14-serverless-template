import React from "react";
import AdminAside from "@/app/(admin)/admin/_components/layout/AdminAside";

export default function AdminMainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full">
      {/* main */}
      <main className="pl-aside-width">{children}</main>

      {/* aside */}
      <AdminAside />
    </div>
  );
}
