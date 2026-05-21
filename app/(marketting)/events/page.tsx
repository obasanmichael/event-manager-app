"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import EventCard from "@/app/components/marketing/EventCard";
import { events } from "@/app/app/events/events";
import { cn } from "@/lib/utils";
import { Input } from "@/app/components/ui/Input";

const categories = [
  "All",
  "Concert",
  "Conference",
  "Workshop",
  "Exhibition",
  "Sport",
  "Networking",
  "Food & Drink",
  "Business",
  "Entertainment",
];

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = events
    .filter((e) =>
      activeFilter === "All" ? true : e.category === activeFilter
    )
    .filter((e) =>
      e.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="min-h-screen">
      <div className="border-b border-border bg-card pt-24 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Discover
          </p>
          <h1 className="mt-1 text-3xl font-bold text-foreground md:text-4xl">
            Find your next experience
          </h1>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Browse concerts, conferences, workshops, and more near you.
          </p>

          <div className="relative mt-6 max-w-xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search events, venues, or cities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  activeFilter === category
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted text-muted-foreground hover:bg-border hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 md:px-6 md:py-14">
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border bg-muted/30 py-20 text-center">
            <p className="font-medium text-foreground">No events found</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
