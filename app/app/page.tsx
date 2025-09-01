"use client";

import { useMemo } from "react";
import WelcomeCard from "./components/WelcomeCard";
import StatsGrid from "./components/StatsGrid";
import TrendsCard from "./components/TrendsCard";

// If you already have real data in app state or props, replace these mocks:
import { events as mockEvents } from "./events/events"; // your existing events seed
// Optionally import attendees aggregate from your store later

export default function DashboardPage() {
  // === Derive metrics from your current mockEvents (replace with real queries later) ===
  const { totalEvents, upcomingEvents } = useMemo(() => {
    const now = new Date();
    const total = mockEvents.length;
    const upcoming = mockEvents.filter((e) => {
      // date is "YYYY-MM-DD" in your model
      const d = new Date(`${e.date}T${e.time || "00:00"}`);
      return d >= now;
    }).length;

    return { totalEvents: total, upcomingEvents: upcoming };
  }, []);

  // If you have attendees per event, sum them here; using a placeholder for now:
  const activeAttendees = 248; // replace with real aggregation later

  // Trends mock: attendees per month (replace with real analytics)
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
            userName="Tolu Obasan"
            email="tolu@example.com"
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
