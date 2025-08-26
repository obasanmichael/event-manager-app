"use client";

import { useState } from "react";
import { events as mockEvents, Event } from "./events";
;
import Link from "next/link";
import { Button } from "@/app/components/Button";
import EventItem from "./eventItem";
import EventForm from "./EventForm";

const EventsPage = () => {
    const [events] = useState<Event[]>(mockEvents);
    const [isModalOpen, setIsModalOpen] = useState(false);

  const hasEvents = events.length > 0;

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Events</h1>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md hover:opacity-90 transition"
        >
          + Create Event
        </Button>
      </div>

      {/* Empty State */}
      {!hasEvents && (
        <div className="flex flex-col items-center justify-center py-20 text-center bg-gray-50 rounded-lg shadow-inner">
          <p className="text-gray-500 mb-4">
            You have not yet created any events.
          </p>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md hover:opacity-90 transition"
          >
            Create Your First Event
          </Button>
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

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/30 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
            {/* <h2 className="text-xl font-bold mb-4">Create New Event</h2> */}
            <EventForm
              onSubmit={(data) => {
                console.log(data);
                setIsModalOpen(false); // close modal after successful submit
              }}
            />
            <div className="flex justify-end mt-4">
              <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;
