import AttendeeItem from "./AttendeeItem";
import { Attendee } from "./attendees";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/Card";

type AttendeeListProps = {
  attendees: Attendee[];
};

const AttendeeList = ({ attendees }: AttendeeListProps) => (
  <Card>
    <CardHeader>
      <CardTitle>Registered attendees</CardTitle>
      <p className="text-sm text-muted-foreground">
        {attendees.length} {attendees.length === 1 ? "person" : "people"}{" "}
        registered
      </p>
    </CardHeader>
    <CardContent className="space-y-2 p-4 pt-0">
      <ol className="space-y-2">
        {attendees.map((attendee, index) => (
          <AttendeeItem key={attendee.id} index={index} attendee={attendee} />
        ))}
      </ol>
    </CardContent>
  </Card>
);

export default AttendeeList;
