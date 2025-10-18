// services/EventsService.ts

import { supabase } from "@/lib/supabase/client";
import { CreateEventInput, UpdateEventInput } from "../app/events/events";

export const EventsService = {
  // ✅ Create Event
  create: async (payload: CreateEventInput) => {
    const { data, error } = await supabase
      .from("events")
      .insert([payload])
      .select();

    return { data, error };
  },

  // ✅ Update Event
  update: async (id: string, payload: UpdateEventInput) => {
    const { data, error } = await supabase
      .from("events")
      .update(payload)
      .eq("id", id)
      .select();

    return { data, error };
  },

  // ✅ Delete Event
  delete: async (id: string) => {
    const { error } = await supabase.from("events").delete().eq("id", id);
    return { error };
  },

  // ✅ Get All Published Events (for homepage, user browsing, etc.)
  getAllPublished: async () => {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false });

    return { data, error };
  },

  // ✅ Get Events Created by Current User
  getUserEvents: async (userId: string) => {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("owner_id", userId)
      .order("created_at", { ascending: false });

    return { data, error };
  },

  // ✅ Get Event by ID
  getById: async (id: string) => {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("id", id)
      .single();

    return { data, error };
  },
};
