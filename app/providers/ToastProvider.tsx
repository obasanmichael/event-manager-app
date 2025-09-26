"use client";

import { Toaster } from "react-hot-toast";

export function ToasterProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        className: "rounded-xl shadow-lg p-4 font-medium",
        style: {
          background: "#1f2937", // Tailwind gray-800
          color: "#f9fafb", // Tailwind gray-50
          fontSize: "0.95rem",
        },
        success: {
          iconTheme: {
            primary: "#22c55e", // Tailwind green-500
            secondary: "#f9fafb",
          },
          style: {
            background: "#064e3b", // Tailwind green-900
          },
        },
        error: {
          iconTheme: {
            primary: "#ef4444", // Tailwind red-500
            secondary: "#f9fafb",
          },
          style: {
            background: "#7f1d1d", // Tailwind red-900
          },
        },
      }}
    />
  );
}
