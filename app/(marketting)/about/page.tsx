import { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Me-event",
  description:
    "Learn more about Me-event and our mission to make event planning seamless.",
};

const values = [
  {
    icon: Target,
    title: "Our mission",
    description:
      "Empower organizers and attendees by simplifying every step of event management, tickets, schedules, venues, and engagement in one platform.",
  },
  {
    icon: Eye,
    title: "Our vision",
    description:
      "Become the trusted platform for discovering and managing events, making memorable experiences accessible to everyone.",
  },
  {
    icon: Users,
    title: "Community first",
    description:
      "We build for organizers who bring people together, from intimate workshops to stadium-scale concerts.",
  },
  {
    icon: Zap,
    title: "Built for speed",
    description:
      "Launch events in minutes, not days. Smart tools that scale from your first meetup to your biggest festival.",
  },
];

export default function AboutPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
            About us
          </p>
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
            Events deserve a{" "}
            <span className="text-gradient-brand">better platform</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Me-event is a modern event management platform for concerts,
            conferences, workshops, and everything in between, designed for
            organizers who care about craft.
          </p>
        </div>

        <div className="relative mt-12 h-72 overflow-hidden rounded-2xl shadow-brand md:h-[420px]">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200"
            alt="Event gathering"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-8 transition hover:border-primary/30 hover:shadow-brand"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">{title}</h2>
              <p className="mt-3 text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
