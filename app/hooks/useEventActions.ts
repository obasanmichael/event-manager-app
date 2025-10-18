// src/app/hooks/useEventActions.ts
import { toast } from "react-hot-toast";
import { EventsService } from "@/app/services/eventsService";
import { EventFormData } from "../app/events/EventForm";
import useEventStore from "../stores/event/store";

 const useEventActions = () => {
  const {
    addEvent,
    updateEvent,
    removeEvent,
    selectEvent,
    toggleModal,
    selectedEvent,
  } = useEventStore();

  const createEvent = async (data: EventFormData) => {
    try {
      const { data: created, error } = await EventsService.create({
        ...data,
        status: "published",
      });
      if (error) throw error;
      addEvent(created![0]);
      toast.success("Event created successfully!");
      toggleModal(false);
    } catch (err) {
      console.error(err);
      toast.error("Failed to create event");
    }
  };

  const editEvent = async (data: EventFormData) => {
    try {
      if (!selectedEvent) return;
      const { data: updated, error } = await EventsService.update(
        selectedEvent.id,
        data
      );
      if (error) throw error;
      updateEvent(updated![0]);
      toast.success("Event updated successfully!");
      toggleModal(false);
      selectEvent(null);
    } catch (err) {
      console.error(err);
      toast.error("Failed to update event");
    }
  };

  const deleteEvent = async (id: string) => {
    try {
      const { error } = await EventsService.delete(id);
      if (error) throw error;
      removeEvent(id);
      toast.success("Event deleted");
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete event");
    }
  };

  return {
    createEvent,
    editEvent,
    deleteEvent,
  };
};

export default useEventActions;