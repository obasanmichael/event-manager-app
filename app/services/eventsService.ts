import {
  CreateEventInput,
  Event,
  UpdateEventInput,
} from "../app/events/events";
import { v4 as uuidv4 } from "uuid";

const EVENTS_STORAGE_KEY = "app-events";

function getStoredEvents(): Event[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(EVENTS_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Event[]) : [];
  } catch {
    return [];
  }
}

function saveEvents(events: Event[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(events));
}

export const EventsService = {
  create: async (payload: CreateEventInput) => {
    const event: Event = { ...payload, id: uuidv4() };
    const events = getStoredEvents();
    events.unshift(event);
    saveEvents(events);
    return { data: [event], error: null };
  },

  update: async (id: string, payload: UpdateEventInput) => {
    const events = getStoredEvents();
    const index = events.findIndex((e) => e.id === id);
    if (index === -1) {
      return { data: null, error: new Error("Event not found") };
    }
    const updated = { ...events[index], ...payload };
    events[index] = updated;
    saveEvents(events);
    return { data: [updated], error: null };
  },

  delete: async (id: string) => {
    const events = getStoredEvents().filter((e) => e.id !== id);
    saveEvents(events);
    return { error: null };
  },

  getAllPublished: async () => {
    const data = getStoredEvents().filter((e) => e.status === "published");
    return { data, error: null };
  },

  getUserEvents: async () => {
    const data = getStoredEvents();
    return { data, error: null };
  },

  getById: async (id: string) => {
    const data = getStoredEvents().find((e) => e.id === id) ?? null;
    return { data, error: data ? null : new Error("Event not found") };
  },
};
