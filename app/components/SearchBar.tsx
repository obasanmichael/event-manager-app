"use client"
import React from "react";
import { Search, Send } from "lucide-react";
export function SearchBar() {
 
  return (
    <div className="w-full bg-white py-8 lg:py-16">
      <div className="container mx-auto px-4 lg:px-6 -mt-16 lg:-mt-24 relative z-20">
        <div className="bg-white/70 backdrop-blur-xl rounded-full shadow-lg p-2 lg:p-3">
          <div className="flex items-center">
            {/* Input */}
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for events, concerts, or workshops..."
                className="w-full pl-12 pr-4 py-3 rounded-full bg-transparent border-none focus:ring-0 text-gray-700 placeholder-gray-400 outline-none"
              />
            </div>

            {/* Button */}
            <button
              className="ml-2 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-md hover:shadow-lg 
          px-4 py-3 md:px-6 md:py-3"
            >
              <Send className="h-5 w-5 md:mr-2" />
              <span className="hidden md:inline">Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
