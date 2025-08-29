// AttendeeItem.tsx
import { Attendee } from "./attendees";
import { Mail, Phone } from "lucide-react";

type AttendeeItemProps = {
  index: number;
  attendee: Attendee;
};

const AttendeeItem = ({
  index,
  attendee: { id, name, email, phone },
}: AttendeeItemProps) => {
  return (
    <li className="group flex items-center justify-between px-5 py-4 rounded-xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-md transition">
      {/* Left section */}
      <div className="flex items-start gap-4">
        {/* Number badge */}
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold">
          {index + 1}
        </span>

        {/* Details */}
        <div>
          <p className="font-semibold text-gray-900 group-hover:text-indigo-600 transition">
            {name}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mt-1 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Mail size={14} className="text-gray-400" />
              {email}
            </span>
            <span className="flex items-center gap-1">
              <Phone size={14} className="text-gray-400" />
              {phone}
            </span>
          </div>
        </div>
      </div>

      {/* Right section */}
      <span className="text-xs font-medium text-gray-400">#{id}</span>
    </li>
  );
};

export default AttendeeItem;
