import HeaderWidget from "@/widgets/layout/header-widget";
import SidebarWidget from "@/widgets/layout/sidebar-widget";
import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="py-2 container-md">
      <div className="flex">
        <SidebarWidget />
        <div className="">
          <HeaderWidget />
          {children}
        </div>
      </div>
    </div>
  );
}
