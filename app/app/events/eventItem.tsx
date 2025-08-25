"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Eye, Pencil, Trash2 } from "lucide-react";
import * as React from "react";

type EventItemProps = {
  event: {
    id: string;
    title: string;
    startsAt: string | Date;
    endsAt?: string | Date;
    location: string;
    category?: string;
    priceLabel?: string; // e.g. "Free" or "$49"
    thumbnailUrl?: string;
    status?: "draft" | "published";
  };
  onDelete?: (id: string) => void;
};

function formatDateTime(d: string | Date) {
  const date = typeof d === "string" ? new Date(d) : d;
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

const EventItem = ({ event, onDelete }: EventItemProps) => {
  const {
    id,
    title,
    startsAt,
    location,
    category,
    priceLabel,
    thumbnailUrl,
    status = "published",
  } = event;

  return (
    <div
      className="group flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 hover:border-indigo-200 hover:shadow-md transition"
      role="row"
    >
      {/* Left: thumb + details */}
      <div className="flex min-w-0 items-center gap-4" role="gridcell">
        {/* Thumbnail (optional) */}
        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
          {thumbnailUrl ? (
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              sizes="48px"
              className="object-cover"
              priority={false}
            />
          ) : (
            <div className="h-full w-full grid place-items-center text-gray-400 text-xs">
              IMG
            </div>
          )}
        </div>

        {/* Textual info */}
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-sm font-semibold text-gray-900">
              {title}
            </h3>

            {/* Status badge */}
            <span
              className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${
                status === "published"
                  ? "bg-indigo-50 text-indigo-700"
                  : "bg-yellow-50 text-yellow-700"
              }`}
            >
              {status === "published" ? "Live" : "Draft"}
            </span>

            {/* Category badge (optional) */}
            {category && (
              <span className="hidden sm:inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-2 py-0.5 text-[10px] font-medium">
                {category}
              </span>
            )}
          </div>

          <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600">
            <span className="inline-flex items-center">
              <Calendar className="mr-1 h-3.5 w-3.5 text-indigo-600" />
              {formatDateTime(startsAt)}
            </span>
            <span className="inline-flex items-center min-w-0">
              <MapPin className="mr-1 h-3.5 w-3.5 text-indigo-600 flex-shrink-0" />
              <span className="truncate">{location}</span>
            </span>
            {priceLabel && (
              <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-0.5 text-[11px] text-gray-800">
                {priceLabel}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Right: actions */}
      <div className="flex items-center gap-2 sm:gap-3" role="gridcell">
        <Link
          href={`/app/events/${id}`}
          className="inline-flex items-center rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:border-indigo-200 hover:text-indigo-700 transition"
          aria-label={`View ${title}`}
          title="View"
        >
          <Eye className="h-4 w-4" />
        </Link>

        <Link
          href={`/app/events/${id}/edit`}
          className="inline-flex items-center rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:border-indigo-200 hover:text-indigo-700 transition"
          aria-label={`Edit ${title}`}
          title="Edit"
        >
          <Pencil className="h-4 w-4" />
        </Link>

        <button
          type="button"
          onClick={() => onDelete?.(id)}
          className="inline-flex items-center rounded-md border border-red-200 bg-white px-2.5 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 transition"
          aria-label={`Delete ${title}`}
          title="Delete"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default EventItem;
