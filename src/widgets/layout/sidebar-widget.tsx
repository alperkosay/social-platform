"use client";
import SidebarNav from "@/components/sidebar/sidebar-nav";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";

const ToggleThemeSwitch = dynamic(
  () => import("@/components/theme/toggle-theme-switch"),
  {
    ssr: false,
    loading: () => <Skeleton className="w-full h-9" />,
  }
);

export default function SidebarWidget() {
  return (
    <aside className="h-svh py-2 max-md:hidden pr-4 border-r">
      <div className="flex flex-col h-full ">
        <div className="pb-4">
          <h2 className="text-2xl font-bold">The Platform</h2>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <SidebarNav />

          <ToggleThemeSwitch />
        </div>
      </div>
    </aside>
  );
}
