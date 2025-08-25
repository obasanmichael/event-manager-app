"use client";

import { useState } from "react";
import { events as mockEvents, Event } from "./events";
;
import Link from "next/link";
import { Button } from "@/app/components/Button";
import EventItem from "./eventItem";

const EventsPage = () => {
  const [events] = useState<Event[]>(mockEvents);

  const hasEvents = events.length > 0;

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Events</h1>
        <Link href="/app/create">
          <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md hover:opacity-90 transition">
            + Create Event
          </Button>
        </Link>
      </div>

      {/* Empty State */}
      {!hasEvents && (
        <div className="flex flex-col items-center justify-center py-20 text-center bg-gray-50 rounded-lg shadow-inner">
          <p className="text-gray-500 mb-4">
            You have not yet created any events.
          </p>
          <Link href="/app/create">
            <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md hover:opacity-90 transition">
              Create Your First Event
            </Button>
          </Link>
        </div>
      )}

      {/* Events List */}
      {hasEvents && (
        <div className=" ">
          <ul className="divide-y divide-gray-200">
            {events.map((event) => (
              <EventItem key={event.id} event={event} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EventsPage;
