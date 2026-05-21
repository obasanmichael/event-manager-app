"use client";

import useProfileStore from "@/app/stores/profile/store";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import UserMenu from "./UserMenu";
import { ThemeToggle } from "@/app/components/theme/ThemeToggle";
import { Logo } from "@/app/components/brand/Logo";
import { Button } from "@/app/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { profile } = useProfileStore();
  const pathname = usePathname();
  const isHeroPage = pathname === "/" || pathname === "/contact";

  useEffect(() => {
    if (!isHeroPage) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHeroPage]);

  const isTransparent = isHeroPage && !isScrolled;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isTransparent
          ? "bg-transparent py-5"
          : "border-b border-border bg-background/90 py-3 backdrop-blur-xl"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Logo variant={isTransparent ? "light" : "default"} />

          <div className="hidden items-center gap-6 md:flex">
            <div className="flex gap-6">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isTransparent
                      ? "text-white/90 hover:text-white"
                      : pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle
                className={cn(
                  isTransparent &&
                    "border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                )}
              />
              {profile ? (
                <UserMenu transparent={isTransparent} />
              ) : (
                <>
                  <Link
                    href="/login"
                    className={cn(
                      "text-sm font-medium transition",
                      isTransparent
                        ? "text-white/90 hover:text-white"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    Log in
                  </Link>
                  <Link href="/signup">
                    <Button>Get started</Button>
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle
              className={cn(
                isTransparent &&
                  "border-white/20 bg-white/10 text-white"
              )}
            />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "rounded-lg p-2",
                isTransparent ? "text-white" : "text-foreground"
              )}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mt-3 rounded-2xl border border-border bg-card p-4 shadow-xl md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-center text-sm font-medium text-foreground hover:bg-muted"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="my-2 border-border" />
              {profile ? (
                <Link
                  href="/app"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground"
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-center text-sm font-medium text-muted-foreground hover:bg-muted"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground"
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
