"use client";
import { ROUTES } from "@/config/routes";
import { Home, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavData = [
  {
    label: "Home",
    href: ROUTES.HOME,
    icon: Home,
  },
  {
    label: "Search",
    href: ROUTES.SEARCH.ROOT,
    icon: Search,
  },
];

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="space-y-2">
        {NavData.map((item, index) => {
          const isActive =
            item.href === "/"
              ? pathname === "/" // anasayfa sadece kendi yolunda aktif
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <li key={index}>
              <Link
                href={item.href}
                className={`flex items-center gap-2 leading-none py-2.5 px-2 hover:bg-primary hover:text-primary-foreground transition-colors rounded ${
                  isActive ? "font-bold" : ""
                }`}
              >
                <item.icon
                  className={`w-5 h-5 ${isActive ? "stroke-2" : "stroke-1"} `}
                />
                {pathname.startsWith(item.href)}
                <span className="leading-none text-lg">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
