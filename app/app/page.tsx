"use client";

import { useMemo } from "react";
import WelcomeCard from "@/app/components/dashboard/WelcomeCard";
import StatsGrid from "@/app/components/dashboard/StatsGrid";
import TrendsCard from "@/app/components/dashboard/TrendsCard";
import { DashboardHeader } from "@/app/components/layouts/DashboardHeader";
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

  const trendData = [
    { label: "Mar", attendees: 120 },
    { label: "Apr", attendees: 160 },
    { label: "May", attendees: 140 },
    { label: "Jun", attendees: 210 },
    { label: "Jul", attendees: 190 },
    { label: "Aug", attendees: 230 },
  ];

  return (
    <>
      <DashboardHeader
        title="Dashboard"
        description="Overview of your events and audience"
      />
      <div className="flex-1 space-y-6 bg-background p-4 pt-20 lg:p-8 lg:pt-8">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
          <div className="space-y-6 xl:col-span-6">
            <WelcomeCard
              userName={`${profile?.first_name ?? ""} ${profile?.last_name ?? ""}`.trim() || "Organizer"}
              email={profile?.email}
              avatarUrl=""
            />
            <StatsGrid
              totalEvents={totalEvents}
              upcomingEvents={upcomingEvents}
              activeAttendees={248}
            />
          </div>
          <div className="xl:col-span-6">
            <TrendsCard data={trendData} />
          </div>
        </div>
      </div>
    </>
  );
}
