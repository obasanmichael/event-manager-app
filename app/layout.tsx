import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";
import { ToasterProvider } from "./providers/ToastProvider";
import AuthListener from "./components/AuthListener";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Me-event — Discover & Host Events",
  description:
    "A modern platform to discover, host, and manage events seamlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('me-event-theme-v2');if(s){var p=JSON.parse(s);var t=(p.state&&p.state.theme)||'light';document.documentElement.classList.add(t);}else{document.documentElement.classList.add('light');}}catch(e){document.documentElement.classList.add('light');}})();`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${inter.className} font-sans`}>
        <ThemeProvider>
          <AuthListener />
          {children}
          <ToasterProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
