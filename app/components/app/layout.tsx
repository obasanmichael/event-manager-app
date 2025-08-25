import { Inter } from "next/font/google";
import SideBar from "./SideBar";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen`}>
        {/* Sidebar */}
        <SideBar />

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-50">{children}</main>
      </body>
    </html>
  );
}
