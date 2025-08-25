// app/about/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Me-event",
  description:
    "Learn more about Me-event and our mission to make event planning seamless.",
};

export default function AboutPage() {
  return (
    <section className="relative bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          About{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Me-event
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Me-event is a modern event management platform designed to make
          planning, organizing, and attending events seamless. From concerts and
          conferences to meetups and workshops, we provide a smart and
          user-friendly way to connect people with experiences they love.
        </p>

        {/* Image */}
        <div className="mt-10">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200"
            alt="Event gathering"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Mission & Vision */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 text-left">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-900">
              🎯 Our Mission
            </h2>
            <p className="mt-3 text-gray-600">
              To empower organizers and attendees by simplifying event
              management. We bring all aspects of event planning—tickets,
              schedules, locations, and engagement—into one powerful platform.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-900">
              🌟 Our Vision
            </h2>
            <p className="mt-3 text-gray-600">
              To be the go-to platform for discovering and managing events,
              making experiences more accessible, enjoyable, and memorable for
              everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
