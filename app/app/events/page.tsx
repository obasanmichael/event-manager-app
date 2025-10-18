"use client";

import { useState } from "react";
import { eventsCreated as mockEvents, Event, events } from "./events";
import { Button } from "@/app/components/ui/Button";
import EventItem from "./eventItem";
import EventForm, { EventFormData } from "./EventForm";
import { Plus } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { EventsService } from "@/app/services/eventsService";
import useEventStore from "@/app/stores/event/store";
import useEventActions from "@/app/hooks/useEventActions";

const EventsPage = () => {
  const { isModalOpen, updateEvent, removeEvent, selectedEvent, toggleModal, selectEvent } =
    useEventStore();
  
  const { createEvent, editEvent, deleteEvent } = useEventActions();

    const handleSave = async (formData: any) => {
      if (selectedEvent) {
        await editEvent(formData);
      } else {
        await createEvent(formData);
      }
    };
  return (
    <div className="lg:p-6 px-4">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Events</h1>
        <Button
          onClick={() => {
            selectEvent(null);
            toggleModal(true);
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
      {events.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center bg-gray-50 rounded-lg">
          <p className="text-gray-500 mb-4">No events yet.</p>
          <Button
            onClick={() => {
              selectEvent(null);
              toggleModal(true);
            }}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
          >
            Create Event
          </Button>
        </div>
      ) : (
        <ul className="divide-y divide-gray-200">
          {events.map((event) => (
            <EventItem
              key={event.id}
              event={event}
              onEdit={(e) => {
                selectEvent(e);
                toggleModal(true);
              }}
              onDelete={deleteEvent}
            />
          ))}
        </ul>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-4">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative">
            <EventForm
              initialData={selectedEvent || undefined}
              onCreate={handleSave}
              onCancel={() => toggleModal(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;
