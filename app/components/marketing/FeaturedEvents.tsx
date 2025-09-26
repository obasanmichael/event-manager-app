import React from "react";
import EventCard from "./EventCard";
import Link from "next/link";
import { events } from "@/app/app/events/events";
export function FeaturedEvents() {
  
  return (
    <div className="w-full bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Events
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover and book tickets to the most exciting events happening near
            you
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {events.slice(0,6).map((event) => (
            <EventCard
              key={event.id}
              image={event.image}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              price={event.price}
              category={event.category}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href={'/events'}>
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all">
              View All Events
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
