"use client";

import { useState } from "react";
import { Attendee } from "./attendees";
import AttendeeList from "./AttendeeList";
import { Button } from "@/app/components/ui/Button";
import { DashboardHeader } from "@/app/components/layouts/DashboardHeader";
import { Download } from "lucide-react";

const AttendeesPage = () => {
  const [attendees] = useState<Attendee[]>([
    {
      id: "1",
      name: "Obasan Michael",
      email: "me@example.com",
      phone: "+234 812 345 6789",
    },
    {
      id: "2",
      name: "Mikeel Taye",
      email: "lol@example.com",
      phone: "+234 701 234 5678",
    },
  ]);

  const exportToCSV = () => {
    const headers = ["ID", "Name", "Email", "Phone"];
    const rows = attendees.map((a) => [a.id, a.name, a.email, a.phone]);
    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((e) => e.join(",")).join("\n");
    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", "attendees.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <DashboardHeader
        title="Attendees"
        description="View and export your event participants"
      />
      <div className="flex-1 space-y-6 bg-background p-4 pt-20 lg:p-8 lg:pt-8">
        <div className="flex justify-end">
          <Button onClick={exportToCSV} variant="outline">
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
        </div>
        <AttendeeList attendees={attendees} />
      </div>
    </>
  );
};

export default AttendeesPage;
