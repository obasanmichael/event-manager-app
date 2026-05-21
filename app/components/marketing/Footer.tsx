import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { Logo } from "@/app/components/brand/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo href="/" />
            <p className="mt-4 max-w-sm text-muted-foreground">
              The premium platform for event management. Create, discover, and
              attend experiences that matter.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:border-primary/30 hover:bg-muted hover:text-primary"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Browse events", href: "/events" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Organizers</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: "Host an event", href: "/login" },
                { label: "Dashboard", href: "/app" },
                { label: "Help center", href: "#" },
                { label: "Pricing", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-8 border-border" />
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Me-event. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
