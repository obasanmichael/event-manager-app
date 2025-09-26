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

export const eventsCreated: Event[] = [
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
    description:
      "An exciting festival featuring top artists from around Africa.",
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

export const events = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Annual Tech Conference 2023",
    date: "Oct 15, 2023",
    time: "9:00 AM",
    location: "Convention Center, San Francisco",
    price: "$299",
    category: "Conference",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Summer Music Festival",
    date: "Jul 8-10, 2023",
    time: "4:00 PM",
    location: "Central Park, New York",
    price: "$149",
    category: "Concert",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "International Food & Wine Expo",
    date: "Sep 22, 2023",
    time: "6:30 PM",
    location: "Grand Hotel, Chicago",
    price: "$85",
    category: "Food & Drink",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Digital Marketing Workshop",
    date: "Nov 5, 2023",
    time: "10:00 AM",
    location: "Business Center, Austin",
    price: "$199",
    category: "Workshop",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Modern Art Exhibition",
    date: "Dec 3, 2023",
    time: "11:00 AM",
    location: "Metropolitan Museum, Miami",
    price: "$25",
    category: "Exhibition",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Entrepreneurship Summit",
    date: "Oct 28, 2023",
    time: "9:30 AM",
    location: "Innovation Hub, Seattle",
    price: "$249",
    category: "Conference",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Jazz Night at Blue Note",
    date: "Aug 15, 2023",
    time: "8:00 PM",
    location: "Blue Note Jazz Club, New York",
    price: "$75",
    category: "Concert",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Fitness & Wellness Expo",
    date: "Sep 10, 2023",
    time: "9:00 AM",
    location: "Wellness Center, Los Angeles",
    price: "$35",
    category: "Sports",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Startup Networking Mixer",
    date: "Jul 22, 2023",
    time: "6:00 PM",
    location: "Tech Hub, Austin",
    price: "Free",
    category: "Networking",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Culinary Masterclass",
    date: "Aug 5, 2023",
    time: "11:00 AM",
    location: "Gourmet Kitchen, Chicago",
    price: "$120",
    category: "Food & Drink",
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Photography Workshop",
    date: "Jul 29, 2023",
    time: "10:00 AM",
    location: "Art Studio, Portland",
    price: "$150",
    category: "Workshop",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Vintage Car Show",
    date: "Sep 3, 2023",
    time: "11:00 AM",
    location: "Exhibition Center, Detroit",
    price: "$20",
    category: "Exhibition",
  },
];
