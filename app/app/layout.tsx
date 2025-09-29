import { Inter } from "next/font/google";
import SideBar from "../components/app/SideBar";
import "../globals.css";
import AuthListener from "../components/AuthListener";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen`}>
        <AuthListener />
        <SideBar />
        <main className="flex-1 pt-10 bg-gray-50">{children}</main>
        
      </body>
    </html>
  );
}
