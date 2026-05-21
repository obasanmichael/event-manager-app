import { Calendar, Clock, MapPin, Ticket } from "lucide-react";
import Image from "next/image";
import { Button } from "@/app/components/ui/Button";

interface EventCardProps {
  image: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  price: string;
}

const EventCard = ({
  image,
  title,
  category,
  date,
  time,
  location,
  price,
}: EventCardProps) => (
  <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-brand">
    <div className="relative h-52 overflow-hidden">
      <Image
        src={image}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        fill
        alt={title}
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 transition group-hover:opacity-100" />
      <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-border/50 bg-card/95 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
        <Ticket className="h-3.5 w-3.5" />
        {category}
      </span>
    </div>

    <div className="p-5">
      <h3 className="line-clamp-1 text-lg font-semibold text-foreground transition group-hover:text-primary">
        {title}
      </h3>

      <div className="mt-3 space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 shrink-0 text-primary" />
          <span>{date}</span>
          <span className="text-border">·</span>
          <Clock className="h-4 w-4 shrink-0 text-primary" />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 shrink-0 text-primary" />
          <span className="truncate">{location}</span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-lg font-bold text-foreground">{price}</span>
        <Button size="sm">Get tickets</Button>
      </div>
    </div>
  </article>
);

export default EventCard;
