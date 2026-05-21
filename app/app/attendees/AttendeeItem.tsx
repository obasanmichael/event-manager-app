import { Attendee } from "./attendees";
import { Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

type AttendeeItemProps = {
  index: number;
  attendee: Attendee;
};

const AttendeeItem = ({
  index,
  attendee: { id, name, email, phone },
}: AttendeeItemProps) => (
  <li
    className={cn(
      "group flex items-center justify-between gap-4 rounded-xl border border-border bg-card px-5 py-4 transition",
      "hover:border-primary/30 hover:shadow-sm"
    )}
  >
    <div className="flex items-start gap-4">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
        {index + 1}
      </span>
      <div>
        <p className="font-semibold text-foreground transition group-hover:text-primary">
          {name}
        </p>
        <div className="mt-1 flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-4">
          <span className="inline-flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5" />
            {email}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5" />
            {phone}
          </span>
        </div>
      </div>
    </div>
    <span className="text-xs font-medium text-muted-foreground">#{id}</span>
  </li>
);

export default AttendeeItem;
