"use client";

import { useState } from "react";

import { Search, Filter, X } from "lucide-react";
import EventCard from "../../components/marketing/EventCard";

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

  const events = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Annual Tech Conference 2023",
      date: "Oct 15, 2023",
      time: "9:00 AM",
      location: "Convention Center, San Francisco",
      price: "$299",
      category: "Conference",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Summer Music Festival",
      date: "Jul 8-10, 2023",
      time: "4:00 PM",
      location: "Central Park, New York",
      price: "$149",
      category: "Concert",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "International Food & Wine Expo",
      date: "Sep 22, 2023",
      time: "6:30 PM",
      location: "Grand Hotel, Chicago",
      price: "$85",
      category: "Food & Drink",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Digital Marketing Workshop",
      date: "Nov 5, 2023",
      time: "10:00 AM",
      location: "Business Center, Austin",
      price: "$199",
      category: "Workshop",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Modern Art Exhibition",
      date: "Dec 3, 2023",
      time: "11:00 AM",
      location: "Metropolitan Museum, Miami",
      price: "$25",
      category: "Exhibition",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Entrepreneurship Summit",
      date: "Oct 28, 2023",
      time: "9:30 AM",
      location: "Innovation Hub, Seattle",
      price: "$249",
      category: "Conference",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Jazz Night at Blue Note",
      date: "Aug 15, 2023",
      time: "8:00 PM",
      location: "Blue Note Jazz Club, New York",
      price: "$75",
      category: "Concert",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Fitness & Wellness Expo",
      date: "Sep 10, 2023",
      time: "9:00 AM",
      location: "Wellness Center, Los Angeles",
      price: "$35",
      category: "Sports",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Startup Networking Mixer",
      date: "Jul 22, 2023",
      time: "6:00 PM",
      location: "Tech Hub, Austin",
      price: "Free",
      category: "Networking",
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Culinary Masterclass",
      date: "Aug 5, 2023",
      time: "11:00 AM",
      location: "Gourmet Kitchen, Chicago",
      price: "$120",
      category: "Food & Drink",
    },
    {
      id: 11,
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Photography Workshop",
      date: "Jul 29, 2023",
      time: "10:00 AM",
      location: "Art Studio, Portland",
      price: "$150",
      category: "Workshop",
    },
    {
      id: 12,
      image:
        "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Vintage Car Show",
      date: "Sep 3, 2023",
      time: "11:00 AM",
      location: "Exhibition Center, Detroit",
      price: "$20",
      category: "Exhibition",
    },
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

          {/* Category Pills */}
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

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2 overflow-x-auto scrollbar-hide px-2 sm:px-0 max-w-full">
              {/* Previous Button */}
              <button className="flex-shrink-0 px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-500 hover:bg-gray-50">
                Previous
              </button>

              {/* Page Buttons */}
              <div className="flex space-x-2 flex-shrink-0">
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`px-4 py-2 rounded-lg font-medium transition flex-shrink-0 ${
                      page === 1
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300 border border-gray-400"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button className="flex-shrink-0 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-900 to-indigo-800 text-white hover:opacity-90 transition">
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
