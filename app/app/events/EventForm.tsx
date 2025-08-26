"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/app/components/Button";

// ✅ Zod schema
const eventSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  location: z.string().min(3, "Location must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  organizer: z.string().min(2, "Organizer name is required"),
  category: z.string().min(1, "Category is required"),
  capacity: z.number().min(1, "Capacity must be at least 1"),
  thumbnailUrl: z.string().url("Must be a valid URL"),
});

type EventFormData = z.infer<typeof eventSchema>;

interface EventFormProps {
  initialData?: Partial<EventFormData>;
  onSubmit: (data: EventFormData) => void;
  onCancel?: () => void;
}

const categories = [
  "Conference",
  "Workshop",
  "Meetup",
  "Festival",
  "Networking",
  "Other",
];

export default function EventForm({
  initialData,
  onSubmit,
  onCancel,
}: EventFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
    defaultValues: initialData || {},
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white p-6 w-full max-w-lg"
    >
      <h2 className="text-xl font-semibold mb-4">
        {initialData ? "Edit Event" : "Create Event"}
      </h2>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          {...register("title")}
          className="w-full mt-1 p-2 border rounded-lg"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      {/* Date */}
      <div>
        <label className="block text-sm font-medium">Date</label>
        <input
          type="date"
          {...register("date")}
          className="w-full mt-1 p-2 border rounded-lg"
        />
        {errors.date && (
          <p className="text-red-500 text-sm">{errors.date.message}</p>
        )}
      </div>

      {/* Time */}
      <div>
        <label className="block text-sm font-medium">Time</label>
        <input
          type="time"
          {...register("time")}
          className="w-full mt-1 p-2 border rounded-lg"
        />
        {errors.time && (
          <p className="text-red-500 text-sm">{errors.time.message}</p>
        )}
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium">Location</label>
        <input
          type="text"
          {...register("location")}
          className="w-full mt-1 p-2 border rounded-lg"
        />
        {errors.location && (
          <p className="text-red-500 text-sm">{errors.location.message}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          {...register("description")}
          className="w-full mt-1 p-2 border rounded-lg"
          rows={3}
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
      </div>

      {/* Organizer */}
      <div>
        <label className="block text-sm font-medium">Organizer</label>
        <input
          type="text"
          {...register("organizer")}
          className="w-full mt-1 p-2 border rounded-lg"
        />
        {errors.organizer && (
          <p className="text-red-500 text-sm">{errors.organizer.message}</p>
        )}
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium">Category</label>
        <select
          {...register("category")}
          className="w-full mt-1 p-2 border rounded-lg"
        >
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category.message}</p>
        )}
      </div>

      {/* Capacity */}
      <div>
        <label className="block text-sm font-medium">Capacity</label>
        <input
          type="number"
          {...register("capacity", {
            valueAsNumber: true,
            setValueAs: (value) => (value === "" ? undefined : Number(value)),
          })}
          className="w-full mt-1 p-2 border rounded-lg"
        />
        {errors.capacity && (
          <p className="text-red-500 text-sm">{errors.capacity.message}</p>
        )}
      </div>

      {/* Thumbnail */}
      <div>
        <label className="block text-sm font-medium">Thumbnail URL</label>
        <input
          type="url"
          {...register("thumbnailUrl")}
          className="w-full mt-1 p-2 border rounded-lg"
          placeholder="https://images.unsplash.com/..."
        />
        {errors.thumbnailUrl && (
          <p className="text-red-500 text-sm">{errors.thumbnailUrl.message}</p>
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 pt-4">
        {onCancel && (
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            className="min-w-[100px]"
          >
            Cancel
          </Button>
        )}
        <Button type="submit" disabled={isSubmitting} className="min-w-[120px]">
          {isSubmitting
            ? "Saving..."
            : initialData
            ? "Update Event"
            : "Create Event"}
        </Button>
      </div>
    </form>
  );
}
