"use client";

import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/Button";

export function SearchBar() {
  return (
    <section className="relative z-20 -mt-12 w-full pb-4 lg:-mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass rounded-2xl p-2 shadow-brand lg:p-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search concerts, conferences, workshops..."
                className="w-full rounded-xl border-0 bg-transparent py-3.5 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0"
              />
            </div>
            <Button className="shrink-0 rounded-xl sm:px-8">
              <span>Search</span>
              <ArrowRight className="h-4 w-4 sm:ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
