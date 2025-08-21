import React from "react";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
export function Hero() {
  return (
    <div className="relative w-full bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-500 opacity-20 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
            Create Unforgettable Experiences with Effortless Event Management
          </h1>
          <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            The premium platform where extraordinary events come to life.
            Seamlessly host, discover, and attend events that matter.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-800 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center">
              <CalendarIcon className="w-5 h-5 mr-2" />
              Host an Event
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center justify-center">
              <MapPinIcon className="w-5 h-5 mr-2" />
              Explore Events
            </button>
          </div>
          <div className="mt-12 flex items-center justify-center space-x-6">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-blue-900 overflow-hidden"
                  >
                    <Image
                      src={`https://randomuser.me/api/portraits/men/${
                        20 + i
                      }.jpg`}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="ml-3 text-sm text-blue-100">
                Join 10,000+ event organizers
              </span>
            </div>
            <div className="hidden md:flex items-center">
              <div className="text-yellow-400 flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-lg">
                    ★
                  </span>
                ))}
              </div>
              <span className="ml-2 text-sm text-blue-100">
                Trusted by professionals
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
