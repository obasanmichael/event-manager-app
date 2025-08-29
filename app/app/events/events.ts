// data/events.ts
export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  price: number;
  organizer: string;
  category: string;
  capacity: number;
  thumbnailUrl: string;
  status: "draft" | "published";
}

export const events: Event[] = [
  {
    id: "1",
    title: "Tech Conference 2025",
    date: "2025-09-15",
    time: "10:00",
    location: "Lagos, Nigeria",
    description: "A global technology conference bringing together innovators.",
    price: 5000,
    organizer: "Tech Hub Africa",
    category: "Conference",
    capacity: 300,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=800&q=80",
    status: "published",
  },
  {
    id: "2",
    title: "Music Festival",
    date: "2025-09-20",
    time: "18:00",
    location: "Abuja, Nigeria",
    description: "An exciting festival featuring top artists from around Africa.",
    price: 0, // use 0 for free events
    organizer: "Abuja Entertainment Group",
    category: "Entertainment",
    capacity: 1000,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=800&q=80",
    status: "published",
  },
  {
    id: "3",
    title: "Startup Pitch Night",
    date: "2025-10-05",
    time: "17:30",
    location: "Port Harcourt, Nigeria",
    description: "Upcoming entrepreneurs pitch their ideas to investors.",
    price: 2000, // keep as number
    organizer: "Startup Hub PH",
    category: "Business",
    capacity: 200,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    status: "draft",
  },
];
