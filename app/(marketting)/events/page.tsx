"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import EventCard from "../../components/marketing/EventCard";
import { events } from "@/app/app/events/events";

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Concert",
    "Conference",
    "Workshop",
    "Exhibition",
    "Sport",
    "Networking",
    "Food & Drink",
  ];

  
  const filterdEvents = events
    .filter((e) =>
      activeFilter === "All" ? true : e.category === activeFilter
    )
    .filter((e) => e.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white pt-20 pb-6 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 pt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Discover Events
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Find and book tickets to the most exciting events happening near you
          </p>

          {/* Search Bar */}
          <div className="mt-6 relative">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search events, venues, or cities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Category filtering */}
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === category
                    ? "bg-gradient-to-br from-purple-600 to-indigo-600 shadow-md text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="flex-grow py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filterdEvents.length > 0 ? (
              filterdEvents.map((event) => (
                <EventCard key={event.id} {...event} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No events match your search.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
