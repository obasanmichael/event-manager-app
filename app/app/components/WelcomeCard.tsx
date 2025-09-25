"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/Avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/Card";

type WelcomeCardProps = {
  userName: string;
  email?: string;
  avatarUrl?: string;
};

export default function WelcomeCard({
  userName,
  email,
  avatarUrl,
}: WelcomeCardProps) {
  const initials = userName
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <Card className="overflow-hidden rounded-2xl shadow-sm">
      <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <CardTitle className="text-xl">Welcome back 👋</CardTitle>
      </CardHeader>
      <CardContent className="p-6 flex items-center gap-4">
        <Avatar className="h-14 w-14 ring-2 ring-indigo-100">
          {avatarUrl ? (
            <AvatarImage src={avatarUrl} alt={`${userName} avatar`} />
          ) : (
            <AvatarFallback>{initials}</AvatarFallback>
          )}
        </Avatar>
        <div className="min-w-0">
          <p className="font-semibold text-gray-900 truncate">{userName}</p>
          {email && <p className="text-sm text-gray-500 truncate">{email}</p>}
          <p className="mt-2 text-sm text-gray-600">
            Here’s a quick snapshot of your events and attendees.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
