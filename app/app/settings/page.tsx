"use client";

import { useState } from "react";
import { Save } from "lucide-react";
import { ThemeToggle } from "@/app/components/theme/ThemeToggle";
import { Switch } from "@/app/components/ui/Switch";
import { Avatar, AvatarImage } from "@/app/components/ui/Avatar";
import { Label } from "@/app/components/ui/Label";
import { Input } from "@/app/components/ui/Input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { DashboardHeader } from "@/app/components/layouts/DashboardHeader";
import useProfileStore from "@/app/stores/profile/store";

export default function SettingsPage() {
  const { profile } = useProfileStore();
  const [notifications, setNotifications] = useState(true);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleDeleteAccount = () => {
    setDeleteModalOpen(false);
  };

  return (
    <>
      <DashboardHeader
        title="Settings"
        description="Manage your profile and preferences"
      />
      <div className="mx-auto max-w-4xl flex-1 space-y-8 bg-background p-4 pt-20 lg:p-8 lg:pt-8">
        <Card className="shadow-sm">
          <CardHeader className="border-b border-border bg-muted/40">
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div className="flex items-center gap-6">
              <Avatar className="h-20 w-20">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1756314355668-7d3056db8600?q=80&w=2670&auto=format&fit=crop"
                  alt="Profile"
                />
              </Avatar>
              <Button variant="outline">Change photo</Button>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" defaultValue={profile?.first_name} />
              </div>
              <div>
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" defaultValue={profile?.last_name} />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue={profile?.email} />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="+1 234 567 8900" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
            </div>

            <div className="flex justify-end">
              <Button>
                <Save className="h-4 w-4" />
                Save changes
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="border-b border-border bg-muted/40">
            <CardTitle>Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-medium text-foreground">
                  Email notifications
                </p>
                <p className="text-sm text-muted-foreground">
                  Updates on events and attendee activity.
                </p>
              </div>
              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-border pt-6">
              <div>
                <p className="font-medium text-foreground">Appearance</p>
                <p className="text-sm text-muted-foreground">
                  Switch between light and dark themes.
                </p>
              </div>
              <ThemeToggle variant="switch" />
            </div>

            <div className="border-t border-border pt-6">
              <p className="font-medium text-destructive">Danger zone</p>
              <p className="mb-3 text-sm text-muted-foreground">
                Permanently delete your account and all associated data.
              </p>
              <Button
                variant="destructive"
                onClick={() => setDeleteModalOpen(true)}
              >
                Delete account
              </Button>
            </div>
          </CardContent>
        </Card>

        {deleteModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 p-4 backdrop-blur-sm">
            <Card className="w-full max-w-md p-6 shadow-xl">
              <h2 className="text-lg font-semibold text-foreground">
                Delete account
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                This action cannot be undone. All your events and data will be
                permanently removed.
              </p>
              <div className="mt-6 flex justify-end gap-3">
                <Button
                  variant="outline"
                  onClick={() => setDeleteModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button variant="destructive" onClick={handleDeleteAccount}>
                  Yes, delete
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </>
  );
}
