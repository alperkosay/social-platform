"use client";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { SearchBar } from "@/features/search";
import { Home, User } from "lucide-react";
import Link from "next/link";

export default function HeaderWidget() {
  return (
    <header className="border-b pb-2">
      <div className="flex justify-between gap-2">
        <Button asChild variant="ghost" size="icon">
          <Link href={ROUTES.HOME}>
            <Home />
          </Link>
        </Button>
        <div className="flex-1 max-w-xs">
          <SearchBar />
        </div>

        <div>
          <Button asChild variant="outline" size="icon">
            <Link href={ROUTES.HOME}>
              <User />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
