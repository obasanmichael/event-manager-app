"use client";

import { useState } from "react";
import { events as mockEvents, Event } from "./events";
import { Button } from "@/app/components/Button";
import EventItem from "./eventItem";
import EventForm, { EventFormData } from "./EventForm";
import { Plus } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const hasEvents = events.length > 0;

  const handleCreate = (newEvent: Omit<Event, "id" | "status">) => {
    const id = uuidv4();

    // Add id + status
    const eventWithId = {
      ...newEvent,
      id, // generate unique id
      status: "published" as const,
    };

    setEvents((prev) => [...prev, eventWithId]);
    setIsModalOpen(false); // close modal
  };
  const handleEdit = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  const handleSave = (eventData: EventFormData) => {
    if (selectedEvent) {
      // Updating existing event
      setEvents((prev) =>
        prev.map((e) =>
          e.id === selectedEvent.id
            ? ({ ...eventData, id: e.id, status: e.status } as Event)
            : e
        )
      );
      setSelectedEvent(null);
    } else {
      // Creating new event
      handleCreate(eventData);
    }

    setIsModalOpen(false);
  };

  return (
    <div className="lg:p-6 px-4">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Events</h1>
        <Button
          onClick={() => {
            setSelectedEvent(null);
            setIsModalOpen(true);
          }}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md hover:opacity-90 transition"
        >
          {/* Icon always visible */}
          <Plus className="h-4 w-4" />
          {/* Text only on medium+ screens */}
          <span className="hidden sm:inline">Create Event</span>
        </Button>
      </div>

      {/* Empty State */}
      {!hasEvents && (
        <div className="flex flex-col items-center justify-center py-20 text-center bg-gray-50 rounded-lg ">
          <p className="text-gray-500 mb-4">
            You have not yet created any events.
          </p>
          <Button
            onClick={() => {
              setSelectedEvent(null)
              setIsModalOpen(true)
            }}
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
              <EventItem
                key={event.id}
                event={event}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
          </ul>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-4">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative">
            <EventForm
              initialData={selectedEvent || undefined}
              onCreate={handleSave}
              onCancel={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;
