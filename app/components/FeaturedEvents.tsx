import React from "react";
import EventCard from "./EventCard";
export function FeaturedEvents() {
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
  ];
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
          {events.map((event) => (
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
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all">
            View All Events
          </button>
        </div>
      </div>
    </div>
  );
}
