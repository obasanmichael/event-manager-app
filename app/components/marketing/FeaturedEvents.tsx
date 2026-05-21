import EventCard from "./EventCard";
import Link from "next/link";
import { Button } from "@/app/components/ui/Button";
import { events } from "@/app/app/events/events";
import { ArrowRight } from "lucide-react";

export function FeaturedEvents() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
            Curated for you
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Featured events
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Discover and book tickets to the most exciting experiences near you
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {events.slice(0, 6).map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/events">
            <Button size="lg" variant="outline" className="gap-2">
              View all events
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
