"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/app/components/Button";
import { FormField } from "./FormField";

// ✅ Zod schema
export const eventSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  location: z.string().min(3, "Location must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.number().min(0, "Price must be at least 0"),
  organizer: z.string().min(2, "Organizer name is required"),
  category: z.string().min(1, "Category is required"),
  capacity: z.number().min(1, "Capacity must be at least 1"),
  thumbnailUrl: z.url("Must be a valid URL"),
});

export type EventFormData = z.infer<typeof eventSchema>;

interface EventFormProps {
  initialData?: Partial<EventFormData>;
  onCancel?: () => void;
  onCreate: (event: EventFormData) => void;
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
  onCancel,
  onCreate,
}: EventFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
    defaultValues: initialData || {},
  });

  const onSubmit = async (data: EventFormData) => {
    console.log(data);
    onCreate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 bg-white lg:p-6 w-full max-w-md lg:max-w-lg rounded-2xl  overflow-y-auto max-h-[85vh]"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
        {initialData ? "Edit Event" : "Create Event"}
      </h2>

      {/* Title */}
      <div className="space-y-1">
        <FormField
          label="Title"
          type="text"
          placeholder="Enter event title"
          {...register("title")}
          error={errors.title}
        />
      </div>

      {/* Date & Time side by side on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Date"
          type="date"
          {...register("date")}
          error={errors.date}
        />

        <FormField
          label="Time"
          type="time"
          {...register("time")}
          error={errors.time}
        />
      </div>

      {/* Location */}
      <FormField
        label="Location"
        type="text"
        placeholder="Enter location"
        {...register("location")}
        error={errors.location}
      />

      {/* Description (textarea) */}
      <FormField
        label="Description"
        as="textarea"
        placeholder="Enter description"
        rows={3}
        {...register("description")}
        error={errors.description}
      />

      {/* Price */}
      <FormField
        label="Price"
        type="number"
        placeholder="Enter Price"
        {...register("price", { valueAsNumber: true })}
        error={errors.price}
      />

      {/* Organizer */}
      <FormField
        label="Organizer"
        type="text"
        placeholder="Organizer name"
        {...register("organizer")}
        error={errors.organizer}
      />

      {/* Category & Capacity side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Category"
          as="select"
          options={[
            { value: "", label: "Select category" },
            ...categories.map((cat) => ({ value: cat, label: cat })),
          ]}
          {...register("category")}
          error={errors.category}
        />

        <FormField
          label="Capacity"
          type="number"
          placeholder="Max attendees"
          {...register("capacity", {
            valueAsNumber: true,
            setValueAs: (value) => (value === "" ? undefined : Number(value)),
          })}
          error={errors.capacity}
        />
      </div>

      {/* Thumbnail */}
      <FormField
        label="Thumbnail URL"
        type="url"
        placeholder="https://images.unsplash.com/..."
        {...register("thumbnailUrl")}
        error={errors.thumbnailUrl}
      />

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
