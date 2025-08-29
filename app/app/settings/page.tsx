"use client";

import { useState } from "react";
import { Save } from "lucide-react";
import { Switch } from "@/app/components/Switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/Avatar";
import { Label } from "@/app/components/Label";
import { Input } from "@/app/components/Input";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/Card";
import { Button } from "@/app/components/Button";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleDeleteAccount = () => {
    // 🔥 Hook this up to your backend delete logic
    console.log("Account deleted!");
    setDeleteModalOpen(false);
  };

  return (
    <div className="max-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Profile Section */}
        <Card className="shadow-md rounded-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            <CardTitle className="text-lg">Profile</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center gap-6">
              <Avatar className="h-20 w-20">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1756314355668-7d3056db8600?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Profile"
                />
              </Avatar>
              <Button variant="outline">Change Photo</Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Michael Obs" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="obs@example.com" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+123 456 7890" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="********" />
              </div>
            </div>

            <div className="flex justify-end">
              <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:opacity-90 transition">
                <Save className="mr-2 h-4 w-4" /> Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Account Preferences */}
        <Card className="shadow-md rounded-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            <CardTitle className="text-lg">Account Preferences</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {/* Notifications */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-gray-500">
                  Get notified about event updates and attendee activity.
                </p>
              </div>
              <Switch
                checked={notifications}
                // onCheckedChange={setNotifications}
              />
            </div>

            {/* Dark Mode */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Dark Mode</p>
                <p className="text-sm text-gray-500">
                  Switch to a darker theme for night use.
                </p>
              </div>
              <Switch />
            </div>

            {/* Delete Account */}
            <div className="pt-4 border-t">
              <p className="font-medium text-red-600">Danger Zone</p>
              <p className="text-sm text-gray-500 mb-3">
                Once you delete your account, all your data will be lost
                permanently.
              </p>
              <Button
                variant="destructive"
                onClick={() => setDeleteModalOpen(true)}
              >
                Delete Account
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Custom Modal */}
        {deleteModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
            <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Delete Account
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Are you absolutely sure? This action cannot be undone and will
                permanently delete your account and all your data.
              </p>

              <div className="mt-6 flex justify-end gap-3">
                <Button
                  variant="outline"
                  onClick={() => setDeleteModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button variant="destructive" onClick={handleDeleteAccount}>
                  Yes, Delete
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
