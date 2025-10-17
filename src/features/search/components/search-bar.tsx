"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/config/routes";
import { Search, X } from "lucide-react";
import { useState } from "react";

export function SearchBar() {
  const [query, setQuery] = useState("");
  return (
    <form action={ROUTES.SEARCH.ROOT} method="get" className="flex gap-2">
      <div className="relative flex-1 flex items-center">
        <Input
          type="text"
          placeholder="Search..."
          name="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="absolute right-2 ">
          <Search className="w-5 h-5" />
        </button>
      </div>
      {query && (
        <Button
          type="reset"
          variant="outline"
          size="icon"
          onClick={() => setQuery("")}
        >
          <X />
        </Button>
      )}
    </form>
  );
}
