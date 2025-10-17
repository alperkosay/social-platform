import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { SearchBar } from "@/features/search";
import { Home } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container-sm flex justify-between gap-2">
        <Button asChild variant="ghost" size="icon">
          <Link href={ROUTES.HOME}>
            <Home />
          </Link>
        </Button>
        <div className="flex-1 max-w-xs">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
