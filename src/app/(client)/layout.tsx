import HeaderWidget from "@/widgets/layout/header-widget";
import SidebarWidget from "@/widgets/layout/sidebar-widget";
import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container-xl">
      <div className="md:grid grid-cols-[250px_minmax(0,_1fr)_250px]">
        <SidebarWidget />
        <div className="*:px-4 pt-2">
          <HeaderWidget />
          {children}
        </div>
      </div>
    </div>
  );
}
