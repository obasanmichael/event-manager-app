"use client";

import { CalendarDays, Users, TicketCheck } from "lucide-react";
import StatCard from "./StatCard";

type StatsGridProps = {
  totalEvents: number;
  upcomingEvents: number;
  activeAttendees: number;
};

export default function StatsGrid({
  totalEvents,
  upcomingEvents,
  activeAttendees,
}: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      <StatCard
        icon={<CalendarDays className="h-5 w-5" />}
        label="Total Events"
        value={totalEvents}
        hint="All-time events you’ve created"
      />
      <StatCard
        icon={<TicketCheck className="h-5 w-5" />}
        label="Upcoming Events"
        value={upcomingEvents}
        hint="Happening soon based on date"
      />
      <StatCard
        icon={<Users className="h-5 w-5" />}
        label="Active Attendees"
        value={activeAttendees}
        hint="Paid/confirmed participants"
      />
    </div>
  );
}
