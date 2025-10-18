import { Event } from "@/app/app/events/events";
import { create } from "zustand";

interface EventStore {
  events: Event[];
  selectedEvent: Event | null;
  isModalOpen: boolean;

  setEvents: (events: Event[]) => void;
  addEvent: (event: Event) => void;
  updateEvent: (event: Event) => void;
  removeEvent: (id: string) => void;

  selectEvent: (event: Event | null) => void;
  toggleModal: (isOpen: boolean) => void;
}

const useEventStore = create<EventStore>((set) => ({
  events: [],
  selectedEvent: null,
  isModalOpen: false,

  setEvents: (events) => set({ events }),
  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
  updateEvent: (event) =>
    set((state) => ({
      events: state.events.map((e) => (e.id === event.id ? event : e)),
    })),
  removeEvent: (id) =>
    set((state) => ({ events: state.events.filter((e) => e.id !== id) })),

  selectEvent: (event) => set({ selectedEvent: event }),
  toggleModal: (isOpen) => set({ isModalOpen: isOpen }),
}));

export default useEventStore;
