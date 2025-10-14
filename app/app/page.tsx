"use client";

import { useMemo } from "react";
import WelcomeCard from "./components/WelcomeCard";
import StatsGrid from "./components/StatsGrid";
import TrendsCard from "./components/TrendsCard";
import { eventsCreated as mockEvents } from "./events/events";
import useProfileStore from "../stores/profile/store";

export default function DashboardPage() {
  const { profile } = useProfileStore();
  const { totalEvents, upcomingEvents } = useMemo(() => {
    const now = new Date();
    const total = mockEvents.length;
    const upcoming = mockEvents.filter((e) => {
      const d = new Date(`${e.date}T${e.time || "00:00"}`);
      return d >= now;
    }).length;

    return { totalEvents: total, upcomingEvents: upcoming };
  }, []);
  const activeAttendees = 248;
  const trendData = [
    { label: "Mar", attendees: 120 },
    { label: "Apr", attendees: 160 },
    { label: "May", attendees: 140 },
    { label: "Jun", attendees: 210 },
    { label: "Jul", attendees: 190 },
    { label: "Aug", attendees: 230 },
  ];

  return (
    <div className="px-4 lg:p-6 space-y-6">
      {/* Grid: 12 cols on desktop → 2-column layout */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Left column */}
        <div className="xl:col-span-6 space-y-6">
          <WelcomeCard
            userName= {`${profile?.first_name} ${profile?.last_name}`}
            email={profile?.email}
            avatarUrl=""
          />
          <StatsGrid
            totalEvents={totalEvents}
            upcomingEvents={upcomingEvents}
            activeAttendees={activeAttendees}
          />
        </div>

        {/* Right column */}
        <div className="xl:col-span-6">
          <TrendsCard data={trendData} />
        </div>
      </div>
    </div>
  );
}
