"use client";

import { useState } from "react";
import { eventsCreated as mockEvents, Event } from "./events";
import { Button } from "@/app/components/ui/Button";
import EventItem from "./eventItem";
import EventForm, { EventFormData } from "./EventForm";
import { DashboardHeader } from "@/app/components/layouts/DashboardHeader";
import { Plus, CalendarPlus } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const hasEvents = events.length > 0;

  const handleCreate = (newEvent: Omit<Event, "id" | "status">) => {
    const eventWithId = {
      ...newEvent,
      id: uuidv4(),
      status: "published" as const,
    };
    setEvents((prev) => [...prev, eventWithId]);
    setIsModalOpen(false);
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
      setEvents((prev) =>
        prev.map((e) =>
          e.id === selectedEvent.id
            ? ({ ...eventData, id: e.id, status: e.status } as Event)
            : e
        )
      );
      setSelectedEvent(null);
    } else {
      handleCreate(eventData);
    }
    setIsModalOpen(false);
  };

  const openCreate = () => {
    setSelectedEvent(null);
    setIsModalOpen(true);
  };

  return (
    <>
      <DashboardHeader
        title="My Events"
        description="Create and manage your events"
      />
      <div className="flex-1 bg-background p-4 pt-20 lg:p-8 lg:pt-8">
        <div className="mb-6 flex items-center justify-end">
          <Button onClick={openCreate}>
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Create event</span>
          </Button>
        </div>

        {!hasEvents && (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/30 py-20 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <CalendarPlus className="h-7 w-7" />
            </div>
            <p className="mb-1 font-medium text-foreground">
              No events yet
            </p>
            <p className="mb-6 max-w-sm text-sm text-muted-foreground">
              Create your first event to start selling tickets and managing
              attendees.
            </p>
            <Button onClick={openCreate}>Create your first event</Button>
          </div>
        )}

        {hasEvents && (
          <ul className="space-y-3">
            {events.map((event) => (
              <EventItem
                key={event.id}
                event={event}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
          </ul>
        )}

        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 p-4 backdrop-blur-sm">
            <div className="relative w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-xl">
              <EventForm
                initialData={selectedEvent || undefined}
                onCreate={handleSave}
                onCancel={() => setIsModalOpen(false)}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EventsPage;
