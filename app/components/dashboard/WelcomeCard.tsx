"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/Avatar";
import { Card, CardContent } from "@/app/components/ui/Card";

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
    <Card className="overflow-hidden border-border shadow-sm">
      <CardContent className="flex items-center gap-5 p-6">
        <Avatar className="h-14 w-14 ring-2 ring-primary/15">
          {avatarUrl ? (
            <AvatarImage src={avatarUrl} alt={`${userName} avatar`} />
          ) : (
            <AvatarFallback className="bg-primary/10 text-base font-semibold text-primary">
              {initials}
            </AvatarFallback>
          )}
        </Avatar>
        <div className="min-w-0">
          <p className="text-sm font-medium text-muted-foreground">
            Welcome back
          </p>
          <p className="truncate text-xl font-semibold text-foreground">
            {userName}
          </p>
          {email && (
            <p className="truncate text-sm text-muted-foreground">{email}</p>
          )}
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Here&apos;s a snapshot of your events and attendees.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
