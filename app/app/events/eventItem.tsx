"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Eye, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import { cn } from "@/lib/utils";
import { Event } from "./events";

interface EventItemProps {
  event: Event;
  onDelete: (id: string) => void;
  onEdit: (event: Event) => void;
}

export function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(dateStr));
}

export function formatTime(timeStr: string) {
  const [hours, minutes] = timeStr.split(":").map(Number);
  const tempDate = new Date();
  tempDate.setHours(hours, minutes);
  return new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  }).format(tempDate);
}

const EventItem = ({ event, onDelete, onEdit }: EventItemProps) => {
  const {
    id,
    title,
    date,
    time,
    location,
    category,
    price,
    thumbnailUrl,
    status = "published",
  } = event;

  return (
    <li
      className={cn(
        "group flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 transition",
        "hover:border-primary/30 hover:shadow-brand sm:flex-row sm:items-center sm:justify-between"
      )}
    >
      <div className="flex min-w-0 items-center gap-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-muted">
          {thumbnailUrl ? (
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              sizes="56px"
              className="object-cover"
            />
          ) : (
            <div className="grid h-full w-full place-items-center text-xs text-muted-foreground">
              EVT
            </div>
          )}
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="truncate font-semibold text-foreground">{title}</h3>
            <span
              className={cn(
                "inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium",
                status === "published"
                  ? "bg-primary/10 text-primary"
                  : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
              )}
            >
              {status === "published" ? "Live" : "Draft"}
            </span>
            {category && (
              <span className="hidden rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground sm:inline-flex">
                {category}
              </span>
            )}
          </div>

          <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-primary" />
              {formatDate(date)} · {formatTime(time)}
            </span>
            <span className="inline-flex min-w-0 items-center gap-1">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
              <span className="truncate">{location}</span>
            </span>
            {price !== undefined && (
              <span className="rounded-md bg-muted px-2 py-0.5 font-medium text-foreground">
                ${price}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2">
        <Link
          href={`/app/events/${id}`}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:border-primary/30 hover:text-primary"
        >
          <Eye className="h-4 w-4" />
        </Link>
        <Button variant="outline" size="icon" onClick={() => onEdit(event)}>
          <Pencil className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => onDelete(id)}
          className="text-destructive hover:border-destructive/30 hover:bg-destructive/10 hover:text-destructive"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </li>
  );
};

export default EventItem;
