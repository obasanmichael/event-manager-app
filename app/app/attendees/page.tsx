"use client";

import { useState } from "react";
import { Attendee } from "./attendees";
import AttendeeList from "./AttendeeList";
import { Button } from "@/app/components/Button";

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
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Attendees</h1>
        <Button
          onClick={exportToCSV}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Export CSV
        </Button>
      </div>

      <AttendeeList attendees={attendees} />
    </div>
  );
};

export default AttendeesPage;
