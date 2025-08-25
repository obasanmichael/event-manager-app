// data/events.ts
export interface Event {
  id: string;
  title: string;
  startsAt: string | Date;
  endsAt?: string | Date;
  location: string;
  category?: string;
  priceLabel?: string; // "Free" or "$49"
  thumbnailUrl?: string;
  status?: "draft" | "published";
}

export const events: Event[] = [
  {
    id: "1",
    title: "Tech Conference 2025",
    startsAt: "2025-09-15T10:00:00",
    endsAt: "2025-09-15T16:00:00",
    location: "Lagos, Nigeria",
    category: "Conference",
    priceLabel: "₦5,000",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=800&q=80",
    status: "published",
  },
  {
    id: "2",
    title: "Music Festival",
    startsAt: "2025-09-20T18:00:00",
    location: "Abuja, Nigeria",
    category: "Entertainment",
    priceLabel: "Free",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=800&q=80",
    status: "published",
  },
  {
    id: "3",
    title: "Startup Pitch Night",
    startsAt: "2025-10-05T17:30:00",
    location: "Port Harcourt, Nigeria",
    category: "Business",
    priceLabel: "₦2,000",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    status: "draft",
  },
];
