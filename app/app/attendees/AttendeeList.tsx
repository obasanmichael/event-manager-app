// AttendeeList.tsx
import AttendeeItem from "./AttendeeItem";
import { Attendee } from "./attendees";

type AttendeeListProps = {
  attendees: Attendee[];
};

const AttendeeList = ({ attendees }: AttendeeListProps) => {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Attendees</h2>
          <p className="text-sm text-gray-500">
            {attendees.length} {attendees.length === 1 ? "person" : "people"}{" "}
            registered
          </p>
        </div>

        
      </div>

      {/* List */}
      <ol className="divide-y divide-gray-100 px-4 py-3 space-y-2">
        {attendees.map((attendee, index) => (
          <AttendeeItem key={attendee.id} index={index} attendee={attendee} />
        ))}
      </ol>
    </section>
  );
};

export default AttendeeList;
